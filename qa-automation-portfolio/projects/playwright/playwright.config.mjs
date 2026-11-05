import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  use: {
    baseURL: 'http://127.0.0.1:3101',
    trace: 'retain-on-failure',
    launchOptions: process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
  },
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'artifacts/playwright' }]],
  webServer: { command: 'node ../../lab/server.mjs', url: 'http://127.0.0.1:3101', env: { PORT: '3101' } },
});
