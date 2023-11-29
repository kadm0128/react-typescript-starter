const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: '/',
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.(js|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
      ],
   },
   resolve: {
      extensions: ['.js', '.ts', '.tsx'],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, '/dist'),
      },
      port: 3000,
      open: true,
      hot: true,
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './index.html',
         filename: './index.html',
      }),
   ],
};
