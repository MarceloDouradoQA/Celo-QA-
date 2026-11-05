import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const catalog = [
  { id: 'mouse', name: 'Mouse sem fio', priceCents: 7990, stock: 3 },
  { id: 'keyboard', name: 'Teclado mecânico', priceCents: 15990, stock: 2 },
];
const products = new Map(catalog.map(product => [product.id, { ...product }]));
const orders = new Map();
const page = readFileSync(new URL('./index.html', import.meta.url));
const port = Number(process.env.PORT || (process.argv.includes('--cypress') ? 3102 : 3000));

function json(response, status, data) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(data));
}

createServer(async (request, response) => {
  const route = request.url;
  if (['GET', 'HEAD'].includes(request.method) && route === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return response.end(page);
  }
  if (request.method === 'GET' && route === '/api/products') {
    return json(response, 200, [...products.values()]);
  }
  if (request.method === 'GET' && route.startsWith('/api/orders/')) {
    const order = orders.get(route.slice('/api/orders/'.length));
    return order ? json(response, 200, order) : json(response, 404, { code: 'ORDER_NOT_FOUND' });
  }
  if (request.method !== 'POST' || route !== '/api/orders') {
    return json(response, 404, { code: 'NOT_FOUND' });
  }
  let input;
  try {
    let body = '';
    for await (const chunk of request) {
      body += chunk;
      if (body.length > 4096) return json(response, 413, { code: 'PAYLOAD_TOO_LARGE' });
    }
    input = JSON.parse(body);
  } catch {
    return json(response, 400, { code: 'INVALID_JSON' });
  }
  const { productId, quantity } = input ?? {};
  if (!Number.isInteger(quantity) || quantity < 1) {
    return json(response, 400, { code: 'INVALID_QUANTITY' });
  }
  const product = products.get(productId);
  if (!product) return json(response, 404, { code: 'PRODUCT_NOT_FOUND' });
  if (quantity > product.stock) return json(response, 409, { code: 'INSUFFICIENT_STOCK' });
  product.stock -= quantity;
  const order = { id: String(orders.size + 1), productId, quantity, totalCents: quantity * product.priceCents };
  orders.set(order.id, order);
  return json(response, 201, order);
}).listen(port, '127.0.0.1', () => console.log(`Lab QA: http://127.0.0.1:${port}`));
