import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [vue()],
  define: {
  	'process.env': {}
  },
  resolve: {
  	alias: {
  		'@': resolve(__dirname, 'src')
  	}
  }
})
