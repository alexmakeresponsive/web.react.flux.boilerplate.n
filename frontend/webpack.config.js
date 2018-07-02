//Require modules
var path              = require("path");
var webpack           = require('webpack');
var autoprefixer      = require('autoprefixer');



//init
//Objects
//Variables
var entryPoints  = {};
var plugins      = [];
var devtoolValue = '';
var NODE_ENV     = process.env.NODE_ENV;


//Actions
//1
// plugins.push();
//2
switch(NODE_ENV) {
    case 'development':
        devtoolValue = 'source-map';
        break;
    case 'production':
        devtoolValue = 'nosources-source-map';
        break;
}
//3
entryPoints = {
    './bundles/index.bundle.min.js':            ['./components/App/index.jsx']
};
//4
if (NODE_ENV === 'production') {
    var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    plugins.push(
        new UglifyJsPlugin({
            sourceMap: true
        })
    );
}
//5
if (NODE_ENV === 'development') {
    var liveReloadString = 'webpack-dev-server/client?http://localhost:9000';

    for (var prop in entryPoints) {
        typeof entryPoints[prop] ===  "object" ? entryPoints[prop].unshift(liveReloadString) : true;
    }
}



module.exports = {
    devtool: false,

    context: __dirname + '/',
    entry: entryPoints,
    output: {
        path: __dirname + '/',
        filename: '[name]',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /components\/?(?:[^\/]+\/?)*.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env', 'react'] }
                    }
                ]
            },
            {
                test: /components\/?(?:[^\/]+\/?)*.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env'] }
                    }
                ]
            },
            {
                test: /components\/?(?:[^\/]+\/?)*.styl$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            url: false,
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: plugins,

    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: __dirname + '/',
        publicPath: '/',
        watchContentBase: true,
    }
};