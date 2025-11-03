import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/1a-website/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "1a-gamer-lounge": resolve(__dirname, "1a-gamer-lounge/index.html"),
        "1a-nachhilfe": resolve(__dirname, "1a-nachhilfe/index.html"),
      },
    },
  },
});
