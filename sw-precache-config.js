module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/images/*',
        'dist/assets/icons/*'
    ],
    runtimeCaching: [
        {
            urlPattern: /rss2json\.com/,
            handler: 'networkFirst'
        }
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
};
