import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: './index.ts',
      name: '@star-ui/core',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['@star-ui/shared', 'vue'],
    },
    outDir: 'dist',
  },
});
