import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from 'vite-plugin-pwa'

// const manifestForPlugin = {
//   registerType: "prompt",
//   includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.png" ],
//   manifest: {
//     name: "Toplifters Ltd",
//     short_name: "Toplifters Ltd",
//     description: "An app that can show the weather forecast for your city.",
//     icons: [

//       {
//         src: "./android-192x192.png",
//         sizes: "192x192",
//         type: "image/png"
//       },
//       {
//         src: "./android-chrome-512x512.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose:'favicon'
//       },
//       {
//         src: '/apple-touch-icon.png',
//         sizes:'180x180',
//         type:'image/png',
//         purpose:'apple touch icon',
//       },
//       {
//         src: "./android-144x144.png",
//         sizes: "144x144",
//         type: "image/png",
//         purpose: "any"
//       },
//       {
//         src: "./favicon-256x256.png",
//         sizes: "256x256",
//         type: "image/png",
//         purpose: "icon"
//       },
//       {
//         src: "./android-chrome-maskable-512x512.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "any maskable"
//       }
//     ],
//     theme_color: "#181818",
//     background_color: "#181BC6",
//     display: "standalone",
//     scope: "/",
//     start_url: "/",
//     orientation: "portrait",
//   },
// };
// VitePWA(manifestForPlugin)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  // server: {
  //   proxy: {
  //     "/uploads": {
  //       target: "http://localhost:4000",
  //       // target: "https://toplifters.net",
  //       changeOrigin: true,
  //       secure: true,
  //     },
  //   },
  // },
});
