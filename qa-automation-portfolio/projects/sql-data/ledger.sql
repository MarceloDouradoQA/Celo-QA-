PRAGMA foreign_keys = ON;

CREATE TABLE products (
  id TEXT PRIMARY KEY,
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0)
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  total_cents INTEGER NOT NULL CHECK (total_cents >= 0)
);

CREATE VIEW reconciliation_issues AS
SELECT orders.id,
       orders.total_cents AS actual_cents,
       orders.quantity * products.price_cents AS expected_cents
FROM orders
JOIN products ON products.id = orders.product_id
WHERE orders.total_cents <> orders.quantity * products.price_cents;
