import { defineConfig } from 'astro/config';

const LOCALHOST_URL = `http://localhost:4321`,
LIVE_URL = "https://Ing-Heber.github.io",
SCRIPT = process.env.npm_lifecycle_script || "",
isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;

 if (isBuild) BASE_URL = LIVE_URL;
 

// https://astro.build/config
export default defineConfig({
    site: BASE_URL
  });
