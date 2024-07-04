import { defineConfig } from 'abell'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  abell: {
    esbuild: {
      loader: 'jsx',
    }
  },
  plugins: [react()],
})