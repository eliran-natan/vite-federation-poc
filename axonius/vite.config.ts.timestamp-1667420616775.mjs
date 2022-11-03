// vite.config.ts
import { defineConfig } from "file:///Users/eliran.natan/react-in-vue/axonius/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/eliran.natan/react-in-vue/axonius/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///Users/eliran.natan/react-in-vue/axonius/node_modules/@originjs/vite-plugin-federation/dist/index.js";
import cssInjectedByJsPlugin from "file:///Users/eliran.natan/react-in-vue/axonius/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import ElementPlus from "file:///Users/eliran.natan/react-in-vue/axonius/node_modules/unplugin-element-plus/dist/vite.mjs";
var vite_config_default = defineConfig({
  plugins: [
    ElementPlus(),
    cssInjectedByJsPlugin(),
    vue(),
    federation({
      name: "axonius",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/components/Dashboard.vue"
      },
      shared: ["vue", "pinia"]
    })
  ],
  build: {
    minify: false,
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZWxpcmFuLm5hdGFuL3JlYWN0LWluLXZ1ZS9heG9uaXVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZWxpcmFuLm5hdGFuL3JlYWN0LWluLXZ1ZS9heG9uaXVzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9lbGlyYW4ubmF0YW4vcmVhY3QtaW4tdnVlL2F4b25pdXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbidcbmltcG9ydCBjc3NJbmplY3RlZEJ5SnNQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzJ1xuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gJ3VucGx1Z2luLWVsZW1lbnQtcGx1cy92aXRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIEVsZW1lbnRQbHVzKCksXG4gICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKCksXG4gICAgdnVlKCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiAnYXhvbml1cycsXG4gICAgICBmaWxlbmFtZTogJ3JlbW90ZUVudHJ5LmpzJyxcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgICAnLi9EYXNoYm9hcmQnOiAnLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlJ1xuICAgICAgfSxcbiAgICAgIHNoYXJlZDogWyd2dWUnLCAncGluaWEnXVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICB0YXJnZXQ6ICdlc25leHQnXG4gfVxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTBTLFNBQVMsb0JBQW9CO0FBQ3ZVLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLDJCQUEyQjtBQUNsQyxPQUFPLGlCQUFpQjtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixzQkFBc0I7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDTCxlQUFlO0FBQUEsTUFDbkI7QUFBQSxNQUNBLFFBQVEsQ0FBQyxPQUFPLE9BQU87QUFBQSxJQUN6QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1g7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
