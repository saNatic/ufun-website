// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],

  // DaisyUI 主题配置 (推荐启用默认主题)
  daisyui: {
    themes: ['light', 'dark'], // 内置主题列表
    darkTheme: 'light', // 默认暗黑主题
    base: true, // 启用基础样式
    styled: true, // 启用组件样式
    utils: true, // 启用响应式工具
    rtl: false, // 关闭RTL模式
  },
}
