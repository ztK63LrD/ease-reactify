import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import clear from 'rollup-plugin-clear'

const nodeEnv = process.env.NODE_ENV === 'production' ? '"production"' : '"development"';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    dts({
      tsconfigPath: 'tsconfig.json', // 指向tsconfig.json文件
      entryRoot: './packages/components', // 指向组件库源代码目录
      outDir: './packages/build/es',  // 指向组件库声明文件输出目录
      exclude: ['node_modules', 'docs', 'review', 'vite.config.ts'], // 排除的文件
    }),
    dts({
      tsconfigPath: 'tsconfig.json',
      entryRoot: 'packages/components',
      outDir: 'packages/build/lib',
      exclude: ['node_modules', 'docs', 'review', 'vite.config.ts'],
    }),
  ],
  resolve: {
    alias: {
      '@ease-reactify': path.resolve(__dirname, './packages'),
    }
  },
  define: { 'process.env.NODE_ENV': nodeEnv },
  build: {
    emptyOutDir: true, // 构建前清空输出目录
    minify: true, // 压缩
    cssCodeSplit: true, // 拆分样式
    copyPublicDir: false, // 关闭vite自带拷贝public目录到build的功能
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'), // 指向组件库核心代码入口文件
      name: 'ease-reactify-ui',
      fileName: (format) => `ease-reactify.${format}.js`,
      cssFileName: 'style', // 样式文件名
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          // es 产物配置
          format: 'es', // 打包格式
          entryFileNames: '[name].js', // 打包后的文件名
          exports: 'named', // 打包后的导出方式
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: './packages/components', // 保留模块结构的根目录
          dir: 'packages/build/es', // 打包后的目录
          assetFileNames: (assetInfo) => { // 打包后的资源文件名
            if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
              return path.join(path.dirname(assetInfo.names[0]), 'style.css')
            }
            return '[name].[ext]'
          },
        },
        {
          // cjs 产物配置
          format: 'cjs',
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'packages/components',
          dir: 'packages/build/lib',
          assetFileNames: (assetInfo) => {
            if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
              return path.join(path.dirname(assetInfo.names[0]), 'style.css')
            }
            return '[name].[ext]'
          },
        },
        {
          format: 'umd',
          entryFileNames: 'index.js',
          exports: 'named',
          name: 'ease-reactify-ui',
          dir: 'packages/build/dist',
          sourcemap: true,
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
          }
        }
      ],
      plugins: [
        clear({
          targets: ['./packages/build'], // 清除目录
        }),
      ]
    }
  }
})