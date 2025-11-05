import js from '@eslint/js';
import globals from 'globals';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import type { FlatConfig } from 'eslint';

// 基础配置
const config: FlatConfig[] = [
  {
    // 忽略规则
    ignores: [
      // 包管理器目录和构建产物
      '**/node_modules/',
      '**/dist/',
      '**/build/',
      '**/coverage/',
      '**/.vitepress/dist/',
      '**/.temp/',
      '**/.cache/',

      // 类型声明和配置文件
      '**/*.d.ts',
      '**/*.json',
      '**/*.md',
      '**/*.html',

      // 样式文件
      '**/*.css',
      '**/*.scss',
      '**/*.sass',
      '**/*.less',
      '**/*.styl',

      // 图片和资源文件
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.gif',
      '**/*.svg',
      '**/*.ico',
      '**/*.webp',

      // 其他
      '**/*.lock',
      '**/*.log',
      '**/.DS_Store',
      '**/.git/',
      '**/.svn/',
      '**/.hg/',
    ],
  },

  {
    // 明确指定需要检查的文件类型
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
    },
    rules: {
      // 基础规则
      'no-console': 'warn',
      'no-debugger': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },

  // JavaScript 推荐规则
  js.configs.recommended,

  // Vue 支持 - 专门处理.vue文件
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs['flat/essential'].rules,
      'vue/multi-word-component-names': 'off',
    },
  },
];

// 添加Prettier配置
config.push({
  // 应用于所有文件
  plugins: {
    prettier,
  },
  rules: {
    // 启用Prettier规则
    'prettier/prettier': 'error',
    // 禁用可能与Prettier冲突的ESLint规则
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    'object-curly-spacing': 'off',
    'quote-props': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    indent: 'off',
    'max-len': 'off',
    quotes: 'off',
  },
});

export default config;
