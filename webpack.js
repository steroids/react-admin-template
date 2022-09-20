const path = require('path');
const fs = require('fs');

if (fs.existsSync(path.resolve(__dirname, '.env'))) {
    require('dotenv').config({
        path: path.resolve(__dirname, '.env'),
    });
}

require('@steroidsjs/webpack')
    .config({
        port: 9350,
        inlineSvg: true,
        baseUrl: '/admin',
        devServer: {
            proxy: process.env.APP_BACKEND_URL
                ? {
                    context: [
                        '/api',
                        '/backend',
                        '/files',
                    ],
                    target: process.env.APP_BACKEND_URL,
                    changeOrigin: true,
                }
                : undefined,
        },
    });
