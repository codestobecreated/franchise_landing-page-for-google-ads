// Production API by default
// For local backend: set NEXT_PUBLIC_API_BASE_URL=http://localhost:8000 in .env.local
export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://core.reluxelectric.com";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
