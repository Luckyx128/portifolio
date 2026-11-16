// Public URL of the deployed site. Read at build time (the page is static),
// so pass it as a build arg: `SITE_URL=https://example.com docker compose build`.
export const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
