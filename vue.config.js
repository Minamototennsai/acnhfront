const { defineConfig } = require('@vue/cli-service')
module.exports = {  
  devServer: {  
    proxy: {  
      '/api': {  
        target: 'http://localhost:8889', // 例如：'http://localhost:8080'  
        ws: true,  
        changeOrigin: true  
      },  
      // 其他的代理配置...  
    }  
  }  
}
