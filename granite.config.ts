import { defineConfig } from '@apps-in-toss/web-framework/config'

export default defineConfig({
  appName: 'breath',
  brand: {
    displayName: '1분호흡',
    primaryColor: '#f97316',
    icon: 'https://raw.githubusercontent.com/muonkr/1min-breath/main/public/icon.png',
  },
  permissions: [],
  navigationBar: {
    withBackButton: true,
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
})
