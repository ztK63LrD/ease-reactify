import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended], // 扩展推荐的规则
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],
            "no-console": "warn", // console.log语句发起警告
            "no-unused-vars": "error", // 未使用的变量发起错误
            "no-dupe-keys": "error", // 对象中重复的键发起错误
            // // 使用单引号
            // quotes: ['error', 'single'],
            // // 禁止使用var
            // 'no-var': 'error',
            // // 强制在函数括号内使用一致的换行符
            // 'function-paren-newline': ['error', 'consistent'],
            // // 要求或禁止末尾逗号
            // 'comma-dangle': ['error', 'always-multiline'],
            // // 要求或禁止箭头函数的参数使用圆括号
            // 'arrow-parens': ['error', 'as-needed'],
            // // 要求箭头函数的主体部分尽可能简洁
            // 'arrow-body-style': ['']
        },
    },
)
