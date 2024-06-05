import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifest: Partial<VitePWAOptions> = {
  injectRegister: "auto",
  registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,png,jpg,gif,webp,svg}"],
  },
  manifest: {
    name: "React PWA",
    short_name: "React PWA",
    description: "My React PWA",
    theme_color: "#000000",
    background_color: "#ffffff",
    display: "standalone",
    icons: [
      {
        src: "/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
});
