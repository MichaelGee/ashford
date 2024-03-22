import path from 'path';
import url from 'url';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      src: './src',
      '@utils': './src/utils',
      '@assets': './src/assets',
      '@components': './src/components',
      '@config': './src/config',
      '@context': './src/context',
      '@layouts': './src/layouts',
      '@pages': './src/pages',
      '@types': './src/types',
    },
  },
});
