import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Surya_portfolio1/',
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
