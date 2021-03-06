import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi-fix-bug-demo',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  menus: {
    '/docs': [
      {
        title: '通用',
        children: ['docs/common/start.md'],
      },
      {
        title: '开发',
        children: ['docs/dev/start.md'],
      },
      /* {
				title: '结果页',
				children: ['/result/index.md'],
			}, */
    ],
  },
});
