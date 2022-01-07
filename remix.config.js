/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: process.env.NODE_ENV == 'development' ? '' : "netlify/functions/server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"]
};
