import js from '@eslint/js';
import globals from 'globals';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// 基础配置
const config = [
  {
    // 忽略规则
    ignores: [
      // 包管理器目录和构建产物
      '**/node_modules/',
      '**/dist/',
      '**/build/',
      '**/coverage/',
      '**/.vitepress/dist/',
      '**/.vitepress/cache/',
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
      // 直接配置Vue规则，避免访问可能不存在的rules属性
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'warn',
      'vue/require-prop-types': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/no-side-effects-in-computed-properties': 'error',
      'vue/valid-v-for': 'error',
      'vue/valid-template-root': 'error',
    },
  },

  // 在ESLint 9 flat config中配置Prettier插件
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // 启用Prettier规则
      'prettier/prettier': 'warn',
    },
  },

  // 使用eslint-config-prettier禁用所有与Prettier冲突的规则
  prettierConfig,

  // 确保基本代码质量规则保持启用
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    rules: {
      // 这些是代码质量规则，不会与Prettier冲突
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-redeclare': 'error',
    },
  },
];

export default config;
