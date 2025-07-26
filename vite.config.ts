/// <reference types="vitest" />
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import clear from 'rollup-plugin-clear'

const nodeEnv = process.env.NODE_ENV === 'production' ? '"production"' : '"development"';

// https://vite.dev/config/
export default defineConfig({
    test: {
        globals: true, // 开启全局变量支持
        environment: 'jsdom', // 测试环境
        include: ["packages/components/**/__tests__/*"], // 测试文件
        coverage: { 
            reporter: ['text', 'html'], // 设置覆盖率报告的格式
            include: ['packages/components/**/*.tsx'], // 包含的文件
        },
    },
    plugins: [react(),
        dts({
            tsconfigPath: 'tsconfig.json', // 指向tsconfig.json文件
            entryRoot: './packages/components', // 指向组件库源代码目录
            outDir: ['./packages/es', './packages/lib'],  // 指向组件库声明文件输出目录
            exclude: ['node_modules', 'docs', 'review', 'vite.config.ts'], // 排除的文件
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
            entry: resolve(__dirname, 'packages/components/index.ts'), // 指向组件库核心代码入口文件
            name: 'ease-reactify-ui',
            fileName: (format) => `ease-reactify.${format}.js`,
            // cssFileName: 'index', // 样式文件名
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx'],
            output: [
                {
                    // es 产物配置
                    format: 'es', // 打包格式
                    entryFileNames: '[name].js', // 打包后的文件名
                    exports: 'named', // 打包后的导出方式
                    preserveModules: true, // 保留模块结构
                    preserveModulesRoot: './packages/components', // 保留模块结构的根目录
                    dir: 'packages/es', // 打包后的目录
                    // assetFileNames: (assetInfo) => { // 打包后的资源文件名
                    //     if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
                    //         return path.join(path.dirname(assetInfo.names[0]), 'index.css')
                    //     }
                    //     return '[name].[ext]'
                    // },
                    assetFileNames: (assetInfo) => {
                        // 按组件目录生成 CSS
                        if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                            const componentDir = path.dirname(assetInfo.name);
                            return `${componentDir}/index.css`;
                        }
                        return '[name].[ext]';
                    },
                },
                {
                    // cjs 产物配置
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    exports: 'named',
                    preserveModules: true,
                    preserveModulesRoot: 'packages/components',
                    dir: 'packages/lib',
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
                            return path.join(path.dirname(assetInfo.names[0]), 'index.css')
                        }
                        return '[name].[ext]'
                    },
                },
                {
                    format: 'umd',
                    entryFileNames: 'index.js',
                    exports: 'named',
                    name: 'ease-reactify-ui',
                    dir: 'packages/dist',
                    sourcemap: true, // 只在 UMD 格式下生成 sourcemap
                    globals: {
                        'react': 'React',
                        'react-dom': 'ReactDOM',
                        'react/jsx-runtime': 'jsxRuntime',
                        'clsx': 'clsx'
                    }
                },
            ],
            plugins: [
                clear({
                    targets: ['./packages/lib', './packages/es', './packages/dist'], // 清除目录
                }),
            ]
        }
    }
})