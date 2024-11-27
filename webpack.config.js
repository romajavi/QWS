const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');



module.exports = {
    entry: {
        main: './src/index.js',
        // Separamos las dependencias críticas
        vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'styled-components']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/',
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: process.env.NODE_ENV === 'production',
                        drop_debugger: true
                    },
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            }),
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: 20,
                    enforce: true
                },
                // Nuevo grupo para las animaciones
                animations: {
                    test: /[\\/]components[\\/].*Animation/,
                    name: 'animations',
                    chunks: 'async',
                    priority: 15
                },
                // Nuevo grupo para componentes comunes
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: false,
                                useBuiltIns: 'usage',
                                corejs: 3,
                                targets: {
                                    browsers: ['>0.2%', 'not dead', 'not op_mini all']
                                }
                            }],
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            'babel-plugin-styled-components'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                auto: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4096
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: 'initial',
            fileBlacklist: [/\.map$/, /hot-update\.js$/]
        }),
        new PreloadWebpackPlugin({
            rel: 'prefetch',
            include: 'asyncChunks'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new CompressionPlugin({
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        process.env.ANALYZE && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utils': path.resolve(__dirname, 'src/utils')
        }
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        hints: 'warning'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
        client: {
            overlay: true
        },
        compress: true,
        proxy: {
            '/api': 'http://localhost:5000'
        }
    }
};