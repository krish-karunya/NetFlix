/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    aspectRatio: {
      "16/16": "16/16",
    },
  },
};
export const plugins = [require("tailwind-scrollbar-hide")];
