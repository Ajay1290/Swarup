const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common ,{    
    mode: "production",
    output: {
      library: 'swarup',
      libraryTarget: 'umd',
      globalObject: 'this',
      filename: "[name].min.js",
      path: path.resolve(__dirname, './dist/JS/')
    },
    optimization:{
        minimizer: [
            new TerserJSPlugin({

            }),
            new OptimizeCSSAssetsPlugin({

            })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '../CSS/[name].min.css',
        }),
    ],
    module: {
      rules: [{
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      ],
    },
});