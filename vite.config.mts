import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite configuration for the CareConnect UI-only app (ESM config)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
