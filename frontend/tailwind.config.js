import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // 如果你的根目录下有 index.html 文件
    "./src/**/*.{js,jsx,ts,tsx}", // 扫描 src 目录下所有的 JS/TS/React 文件
  ],
  theme: {
    extend: {
      // 在这里可以扩展默认主题，比如增加自定义颜色、字体等等
      colors: {
        primary: "#1E3A8A",
        secondary: "#9333EA",
      },
    },
  },
  plugins: [
    // 如果需要安装插件，可以在这里引入，例如：
    require('daisyui'),
    // require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
