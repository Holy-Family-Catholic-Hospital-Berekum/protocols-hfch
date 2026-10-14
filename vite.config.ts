import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // New versions activate in the background; src/components/updatePrompt.tsx registers the worker,
      // checks for updates whenever the app is resumed, and asks before reloading.
      registerType: 'autoUpdate',
      injectRegister: false,
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'HFCH Clinical Protocols',
        short_name: 'HFCH Protocols',
        description: 'Clinical protocols for doctors at Holy Family Catholic Hospital, Berekum',
        theme_color: '#060b1c',
        background_color: '#060b1c',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      // Custom worker (src/sw.ts): page loads are network-first so new deploys show up on refresh.
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
      },
    }),
  ],
})
