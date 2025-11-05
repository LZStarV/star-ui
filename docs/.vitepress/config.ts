import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Star-UI',
  description: '一个基于 Vue 3 的组件库',
  // 指定文档源目录
  srcDir: 'src',
  // 配置导航菜单
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/guide' },
      { text: '组件列表', link: '/components' },
    ],
  },
});
