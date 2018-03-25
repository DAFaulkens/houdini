const merge = require('webpack-merge');
const common = require('./webpack.common.js');

var common_stuff = {
    devtool: 'inline-source-map',
}

module.exports = [
    merge(common.base, common_stuff),
    merge(common.translations, common_stuff),
    merge(common.button, common_stuff),
    merge(common.css, common_stuff)
]
