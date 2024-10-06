import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.USE_REAL_CONTENT': JSON.stringify(process.env.USE_REAL_CONTENT)
  }
});