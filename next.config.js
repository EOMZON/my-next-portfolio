/** @type {import('next').NextConfig} */

const repo = 'my-next-portfolio';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  basePath,
  assetPrefix,
  output: 'export',
};

module.exports = nextConfig;
