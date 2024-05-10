const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { plugin } = require('postcss');
const { stdout, stderr } = require('process');
const { alias } = require('yargs');
const exec = require('child_process').exec;

const shopwareRoot = '../../../../../../../';

const storfrontRoot = path.resolve(shopwareRoot,'vendor/shopware/storefront/Resources/app/storefront');

const { join , resolve } = require('path');
 
 
//const { join , resolve } = require('path');
//const { alias } = require('yargs');

module.exports = {
  
        mode: 'production',
        entry : './src/main.js',
        module :{
          rules :[
            {
              test: /\.svg$/,
              use: 'svg-inline-loader'
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(?:js|mjs|cjs)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                  ]
                }
              }
            }
          ]
        },
        output : {
            filename : 'new_theme.js',
            path: path.join(__dirname, '..','dist','storefront','js','ulas-theme'),
        },
        resolve : {
          extensions : ['.js','.jsx','.json'],
          modules : [
            path.resolve(__dirname,'node_modules'),
            
          ],
          alias : {
            'jquery' : path.resolve(path.join(__dirname,'..','node_modules','jquery')),
            'simple-color-picker' : path.resolve(path.join(__dirname,'..','node_modules','simple-color-picker')),
            'deepmerge' : path.resolve(path.join(__dirname,'..','node_modules','deepmerge')),
          

            src : path.resolve(storfrontRoot,'src'),
            assets : path.resolve(storfrontRoot,'assets'),
            scss : path.resolve(storfrontRoot,'src/scss'),
            vendor : path.resolve(storfrontRoot,'vendor')
 
          }

        },
         plugins :  [
          new HtmlWebpackPlugin(),
          {
            apply : (compiler)=>{
              compiler.hooks.afterEmit.tap('AfterEmitPlugin',(compilation) => {
                exec(shopwareRoot+'/bin/console theme:compile',(err,stdout,stderr)=>{
                  if(stdout) process.stdout.write(stdout);
                  if(stderr) process.stdout.write(stderr);
                });
              });
            }
          }
         ]
};