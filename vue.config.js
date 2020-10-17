module.exports = {
    devServer: {
        proxy: {
<<<<<<< HEAD
            '/api':'https://api.qq.jsososo.com'
        }
    }
=======
            '/api': {
                target: 'https://api.qq.jsososo.com', //对应自己的接口
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
>>>>>>> 4383a7f93a80b853bcd261e6e4fc9457c6ecd464
}