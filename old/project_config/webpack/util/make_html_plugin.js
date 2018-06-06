/**
 * @author senntyou <jiangjinbelief@163.com>
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config) => {
    return new HtmlWebpackPlugin({
        template: config.buildPaths.src.dir + '/' + config.module + '/index.html'
    })
};