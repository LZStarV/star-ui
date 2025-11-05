// Stylelint配置文件
export default {
  // 忽略规则
  ignoreFiles: [
    // 忽略node_modules目录
    '**/node_modules/**/*',
    // 忽略构建产物目录
    '**/dist/**/*',
    '**/build/**/*',
    '**/coverage/**/*',
    '.vitepress/dist/**/*',
    // 忽略非样式文件
    '**/*.{js,jsx,ts,tsx,vue,json,md,html}',
    // 忽略特定文件
    '**/*.lock',
    '**/*.log',
  ],

  // 插件配置
  plugins: ['stylelint-scss'],

  // 处理器配置（处理特定文件类型）
  overrides: [
    {
      files: ['**/*.scss', '**/*.sass'],
      customSyntax: 'postcss-scss',
    },
  ],

  // 继承的配置
  extends: [
    // 标准配置
    'stylelint-config-standard',
    // SCSS推荐配置
    'stylelint-config-recommended-scss',
    // 与Prettier集成，禁用冲突规则
    'stylelint-config-prettier-scss',
  ],

  // 自定义规则
  rules: {
    // 移除不兼容的规则，依赖prettier进行格式化
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'selector-max-compound-selectors': 5,
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
};
