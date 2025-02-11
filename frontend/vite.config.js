import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react({
    // 默认配置已经是 automatic，如果需要可明确指定：
    jsxRuntime: 'automatic',
  }),
    tailwindcss(),
  ],
})