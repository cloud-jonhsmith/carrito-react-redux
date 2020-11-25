const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    output: {
        filename: 'js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'development',
    devtool: "cheap-source-map",
    devServer: {
        historyApiFallback: true,
        open: true,
        contentBase: path.join(__dirname, './dist'),
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test:/\.module\.s(a|c)ss$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /.module.(s(a|c)ss)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    /* plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
    ], */
})