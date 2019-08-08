const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CONFIG = require('./config')

const output = 'dist'
const port = 3000
const entry = path.resolve(__dirname, 'src/index.js')
const mockjs = path.resolve(__dirname, 'mock/index.js')


module.exports = (env) => {
  return {
    mode: env.development ? 'development' : 'production',

    entry: {
      main: env.development ? [ mockjs, entry ] : entry
    },

    output: {
      path: path.resolve(__dirname, output)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    externals: {
      'antd': 'antd',
      'ckeditor': 'CKEDITOR',
      'g2': 'G2',
      'moment': 'moment',
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      'react-router-dom': 'ReactRouterDOM'
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'mock')
          ],
          use: 'babel-loader'
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'static/images/[name].[hash:8].[ext]',
                limit: 8192
              }
            }
          ],
        },
        {
          test: /\.(css)$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ]
        },
        {
          test: /\.(less)$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
          ],
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
                sourceMap: true,
                modifyVars: {
                  'primary-color': '#09c',
                  'font-size-base': '12px',
                  'form-item-margin-bottom': '12px',
                  'border-radius-base': '0px',
                  'border-radius-sm': '0px',
                }
              }
            }
          ],
        },
        {
          test: /\.(ts)$/,
          use: 'ts-loader'
        },
        {
          test: /\.(pug)$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'pug-html-loader',
              options: {
                basedir: path.resolve(__dirname),
                pretty: true,
                data: {
                  ...CONFIG
                }
              }
            }
          ],
        }
      ]
    },

    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/static/images'),
          to: 'static/images'
        },
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: ''
        }
      ]),

      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.pug'),
      }),

      new webpack.DefinePlugin({
        CONFIG: JSON.stringify( CONFIG ),
        DEVELOPMENT: JSON.stringify( Boolean(env.development) )
      }),
    ],

    devtool: 'source-map',

    optimization: {
      minimize: Boolean(env.production),
      splitChunks: {
        cacheGroups: {
          common: {
            name: 'common',
            test: path.resolve(__dirname, 'node_modules'),
            chunks: 'all',
            enforce: true,
            priority: 20
          }
        }
      }
    },

    devServer: {
      port,
      contentBase: output
    }
  }
}
