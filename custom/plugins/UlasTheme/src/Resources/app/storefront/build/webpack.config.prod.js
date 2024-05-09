const path = require('path');
const { plugin } = require('postcss');
const exec = require('child_process').exec;

const shopwareRoot = '../../../../../../../';

const storfrontRoot = path.resolve(shopwareRoot,'vendor/shopware/storefront/Resources/app/storefront');


//const { join , resolve } = require('path');
//const { alias } = require('yargs');

module.exports = {
  
        mode: 'production',
        entry : './src/main.js',
        output : {
            filename : 'ulas-theme.js',
            path : path.resolve(__dirname,'..','dist','storefront','joins'),
        },
      //  resolve : {...},
      //  plugins : [...]
};