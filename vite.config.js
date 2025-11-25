import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_PATH || "/hotel-booking-react",

    // Example: expose Clerk key as define
    define: {
      __CLERK_KEY__: JSON.stringify(env.VITE_CLERK_PUBLISHABLE_KEY),
    },
  };
});
