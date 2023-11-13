/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  generateBuildId: async () => {
    return 'build';
  },
  distDir: 'out',
};

module.exports = nextConfig;
