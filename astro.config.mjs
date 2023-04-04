import { defineConfig } from "astro/config";
import tailwindIntegration from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwindIntegration()],
});
