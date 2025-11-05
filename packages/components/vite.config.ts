import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.vue', 'src/**/*.ts', 'button/**/*.vue', 'button/**/*.ts'],
    }),
  ],
  build: {
    lib: {
      entry: {
        index: './src/index.ts',
        button: './button/src/index.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['@star-ui/core', '@star-ui/shared', 'vue'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'packages/components',
      },
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
