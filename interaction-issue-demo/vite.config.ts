import { defineConfig } from 'abell';
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  abell: {
    esbuild: {
      loader: "jsx",
    },
    serverBuild: {
      target: 'es2022',
    }
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Moving Blade to separate bundle because otherwise it creates circular dependency in server build where blade code goes in entry.build which is used in page but that page is imported in entry.build
          if (id.includes('node_modules')) {
            if (id.includes('blade') && id.includes('.js')) {
              return 'blade'
            }
          }
        },
      },
    }
  },
  plugins: [
    react(),
  ],
  ssr: {
    noExternal: ["@razorpay/blade", "@razorpay/i18nify-js", "@razorpay/i18nify-react", "styled-components", "@emotion/stylis"],
  },
});
