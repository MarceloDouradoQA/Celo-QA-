import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = __ENV.BASE_URL || 'http://127.0.0.1:3000';
export const options = {
  vus: 5,
  duration: '10s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<300'],
    checks: ['rate>0.99'],
  },
};

export default function () {
  const response = http.get(baseUrl + '/api/products', { tags: { name: 'GET /api/products' } });
  check(response, {
    'HTTP 200': result => result.status === 200,
    'catálogo contém produtos': result => {
      if (result.status !== 200) return false;
      const products = result.json();
      return Array.isArray(products) && products.length > 0;
    },
  });
  sleep(0.2);
}
