// 导出所有组件
import Button from '../button/src/button.vue';
import { version } from '@star-ui/core';

// 组件列表
const components = {
  Button,
};

// 安装函数
export function install(app: any) {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key as keyof typeof components]);
  });
}

// 导出组件
export { Button };

// 导出版本
export { version };

// 默认导出
export default {
  version,
  install,
  ...components,
};
