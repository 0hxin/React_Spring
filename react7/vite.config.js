import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 리액트에서 사용하는 프록시 기본 서버 주소 이름 설정
    proxy: {
      '/api': {
        // 실제 접속할 서버
        target: "http://localhost:8080/",
        // CORS 문제 해결
        changeOrigin: true,
        // '/api/test' 요청을 '/test' 로 변환하여 전달
        rewrite: (path) => path.replace(/^\/api/, "/"),
      }
    }
  }
})