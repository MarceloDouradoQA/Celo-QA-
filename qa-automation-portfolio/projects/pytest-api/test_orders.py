import json
import os
from urllib.error import HTTPError
from urllib.request import Request, urlopen

import pytest

BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:3000")


def request(path, payload=None):
    data = None if payload is None else json.dumps(payload).encode()
    req = Request(BASE_URL + path, data=data, headers={"Content-Type": "application/json"})
    try:
        with urlopen(req, timeout=5) as response:
            return response.status, json.load(response)
    except HTTPError as response:
        with response:
            return response.code, json.load(response)


@pytest.mark.parametrize(("payload", "expected_status", "expected_code"), [
    ({"productId": "mouse", "quantity": 0}, 400, "INVALID_QUANTITY"),
    ({"productId": "mouse", "quantity": 1.5}, 400, "INVALID_QUANTITY"),
    ({"productId": "missing", "quantity": 1}, 404, "PRODUCT_NOT_FOUND"),
    ({"productId": "mouse", "quantity": 99}, 409, "INSUFFICIENT_STOCK"),
])
def test_rejects_invalid_order(payload, expected_status, expected_code):
    assert request("/api/orders", payload) == (expected_status, {"code": expected_code})


def test_created_order_can_be_read_and_updates_stock():
    _, products = request("/api/products")
    before = next(p for p in products if p["id"] == "mouse")
    status, order = request("/api/orders", {"productId": "mouse", "quantity": 1})
    assert status == 201
    assert order["totalCents"] == before["priceCents"]
    assert request(f"/api/orders/{order['id']}") == (200, order)
    _, products = request("/api/products")
    after = next(p for p in products if p["id"] == "mouse")
    assert after["stock"] == before["stock"] - 1
