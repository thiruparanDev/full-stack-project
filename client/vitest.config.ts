import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3000',
    //       changeOrigin: true
    //     }
    //   }
    // },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000', // Backend server
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Adjust the API prefix if needed
//       },
//     },
//   },
// });
