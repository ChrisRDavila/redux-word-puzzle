import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// npm install jest --save-dev

// npm install @testing-library/react --save-dev
// npm install ts-jest @types/jest --save-dev