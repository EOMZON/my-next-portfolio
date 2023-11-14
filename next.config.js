//20231114 为什么要加repo前缀，不加可以吗？按照这个设置本地测试便无法正常运行
// /** @type {import('next').NextConfig} */

// const repo = 'my-next-portfolio';
// const assetPrefix = `/${repo}/`;
// const basePath = `/${repo}`;

// const nextConfig = {
//   basePath,
//   assetPrefix,
//   output: 'export',
// };

// module.exports = nextConfig;

/**20231114 参考一个可以根据是否在github actions中运行加前缀**/
/** @type {import('next').NextConfig} */

// const isGithubActions = process.env.GITHUB_ACTIONS || false;
// let assetPrefix = '';
// let basePath = '';

// if (isGithubActions) {
//   // 去掉 `<owner>/`
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// }

// const nextConfig = {
//   basePath,
//   assetPrefix,
//   output: 'export',
// };

const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;
