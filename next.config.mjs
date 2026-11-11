// Static export so the site can be hosted on GitHub Pages.
// BASE_PATH is set automatically by the GitHub Actions workflow.
// If your repo is named <username>.github.io it stays empty.
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
