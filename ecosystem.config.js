module.exports = [
    {
        script: './dist/shared/server.js',
        name: 'api',
        watch: true,
    },
    {
        script: './dist/shared/cron.js',
        name: 'cron',
        watch: true,
    },
]
