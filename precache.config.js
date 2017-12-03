const packageName = require('./package.json').name;

module.exports = {
  cacheId: packageName,
  filename: 'service-worker.js',
  staticFileGlobs: [
    'build/public/**/*.{js,html,css,png,jpg,gif,svg,json}'
  ],
  staticFileGlobsIgnorePatterns: [
    /\.map$/
  ],
  stripPrefix: 'build/public/',
  dynamicUrlToDependencies: {
    '/shell': [
      'build/server/views/layout.pug',
      'build/server/views/index.pug',
      'build/public/app.bundle.js',
      'build/public/app.css'
    ],
    '/about': [
      'build/server/views/layout.pug',
      'build/server/views/index.pug',
      'build/public/About.bundle.js'
    ]
  },
  navigateFallback: '/shell',
  navigateFallbackWhitelist: [
    /^\/$/,
    /^\/[\w-]+\/[\w-]+$/
  ],
  maximumFileSizeToCacheInBytes: 5242880
};
