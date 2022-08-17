import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// auto import vue https://www.npmjs.com/package/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { loadEnv } from 'vite'

const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default ({ command, mode }) => {
  console.log(command, mode)
  return {
    base: './',
    //define global var
    define: {
      //fix "path" module issue
      'process.platform': null,
      'process.version': null,
      GLOBAL_STRING: JSON.stringify('i am global var from vite.config.js define'),
      GLOBAL_VAR: {
        test: 'i am global var from vite.config.js define'
      }
    },
    clearScreen: false,
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 8077, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      // proxy look for https://vitejs.cn/config/#server-proxy
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue({
        reactivityTransform: true
      }),
      vueJsx(),
      // https://github.com/antfu/unplugin-auto-import/blob/HEAD/src/types.ts
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: [
          'vue',
          'pinia',
          'vue-router'
          // {
          //   '@/hooks/global/useCommon': ['useCommon'],
          //   '@/hooks/global/useElement': ['useElement'],
          //   '@/hooks/global/useVueRouter': ['useVueRouter'],
          //   '@/utils/axiosReq': ['axiosReq']
          // }
        ],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: true // auto generation auto-imports.d.ts file
      })
    ],
    build: {
      minify: 'esbuild',
      brotliSize: false,
      // 消除打包大小超过警告
      chunkSizeWarningLimit: 5000,
      // remote console.log in prod
      terserOptions: {
        // detail to look https://terser.org/docs/api-reference#compress-options
        compress: {
          // 打包自动删除console
          drop_console: true,
          drop_debugger: true
        },
        keep_classnames: true
      },
      // build assets Separate
      assetsDir: 'static/assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 分包逻辑
          manualChunks (id) {
            // // mdi 较大，单独拆包
            // if(id.includes('@mdi')){
            //   return 'mdi'
            // }
            // // JSON formatter 分离
            // if (id.includes('node_modules/json-formatter-js')) {
            //   return 'json-formatter'
            // }
            // // 其余依赖均拆分至 libs 模块
            // if(id.includes('node_modules')){
            //   return 'libs'
            // }
          }
        }
      }
    },
    resolve: {
      alias: {
        '~/': `${pathSrc}/`,
        '@/': `${pathSrc}/`,
        // remove i18n waring
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    }
  }
}
