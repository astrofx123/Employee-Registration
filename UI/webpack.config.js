const path = require('path');
module.exports = {
mode: 'development',
entry: { 
    client: './uiServer.js' 
},
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
},
module: {
    rules: [{
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env','@babel/preset-react'] },
    },],
},
optimization: {
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                enforce: true,
                chunks: 'all'
            }
        }
    }
}
};