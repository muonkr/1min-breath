import { defineConfig } from '@apps-in-toss/web-framework/config'

export default defineConfig({
  appName: 'breath',
  brand: {
    displayName: '1분호흡',
    primaryColor: '#f97316',
    icon: 'icon.png',
  },
  permissions: [],
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
})
