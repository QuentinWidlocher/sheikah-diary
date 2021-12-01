module.exports = {
    apps: [
        {
            name: 'Remix',
            script: 'remix dev --host 0.0.0.0',
            ignore_watch: ['.'],
            env: {
                NODE_ENV: process.env.NODE_ENV ?? 'development',
                ENABLE_TEST_ROUTES: process.env.ENABLE_TEST_ROUTES ?? true,
                RUNNING_E2E: process.env.RUNNING_E2E,
                FORCE_COLOR: '1',
            },
        },
        // We build postcss to other/postcss.ignored and use rsync to copy them to
        // the app directory. If we point postcss directly to the app directory then
        // it updates the files even if there are no changes, which triggers a
        // double rebuild. So we use rsync with --checksum so it only updates the
        // files when their contents have changed.
        {
            name: 'Postcss',
            script:
                'postcss styles/**/*.css --base styles --dir .tmp/postcss.ignored && rsync -v --checksum -a .tmp/postcss.ignored/ app/styles',
            autorestart: false,
            watch: [
                './tailwind.config.js',
                './styles/**/*.css',
            ],
            env: {
                NODE_ENV: process.env.NODE_ENV ?? 'development',
                FORCE_COLOR: '1',
            },
        }
    ],
}