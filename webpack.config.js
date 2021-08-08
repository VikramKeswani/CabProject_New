/* eslint-disable */ 
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
       "index": "./public/js/index.js",
        "login": "./public/js/login.js",
        "cab_and_driver_reg" : "./public/js/cab_and_driver_reg.js",
       "driver_login": "./public/js/driver_login.js",
    },
    output: {
        path: path.join( __dirname, "dist" ),
        filename: "[name].bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Cab Registration',
            filename: './driver_login.html',
            template: path.join( __dirname, 'public', 'driver_login.html' ),
            inject: true,
            chunks: [ 'driver_login']
        }),
        new HtmlWebpackPlugin({
            title: 'Login',
            filename: './login.html',
            template: path.join( __dirname, 'public', 'login.html' ),
            inject: true,
            chunks: [ 'login' ]
        }),

        new HtmlWebpackPlugin({
            title: 'Add Team',
            filename: './cab_and_driver_reg.html',
            template: path.join( __dirname, 'public', 'cab_and_driver_reg.html' ),
            inject: true,
            chunks: [ 'cab_and_driver_reg' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Add Team',
            filename: './index.html',
            template: path.join( __dirname, 'public', 'index.html' ),
            inject: true,
            chunks: [ 'index' ]
        })
    ]
}