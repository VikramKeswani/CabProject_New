/* eslint-disable */ 
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
//        "index": "./public/js/index.js",
        "login": "./public/js/login.js",
        "register": "./public/js/register.js",
        "register_cab":"./public/js/register_cab.js",
        "dashboard" :"./public/js/driver_dashboard.js",
        "table_display" :"./public/js/table_display.js",
         "personal_info": "./public/js/personal_info.js",
        // "add-meeting": "./public/js/add-meeting.js",
        // "teams": "./public/js/teams.js",
        // "add-teams": "./public/js/add-teams.js"
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
            title: 'Home',
            filename: './driver_dashboard.html',
            template: path.join( __dirname, 'public', 'driver_dashboard.html' ),
            inject: true,
            chunks: [ 'driver_dashboard' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Cab Registration',
            filename: './register_cab.html',
            template: path.join( __dirname, 'public', 'register_cab.html' ),
            inject: true,
            chunks: [ 'register_cab' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Table Display',
            filename: './table_display.html',
            template: path.join( __dirname, 'public', 'table_display.html' ),
            inject: true,
            chunks: [ 'table_display' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Personal Info',
            filename: './personal_info.html',
            template: path.join( __dirname, 'public', 'personal_info.html' ),
            inject: true,
            chunks: [ 'personal_info' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Login',
            filename: './login.html',
            template: path.join( __dirname, 'public', 'login.html' ),
            inject: true,
            chunks: [ 'login' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Driveer Register',
            filename: './register.html',
            template: path.join( __dirname, 'public', 'register.html' ),
            inject: true,
            chunks: [ 'register' ]
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Add Team',
        //     filename: './add-teams.html',
        //     template: path.join( __dirname, 'public', 'add-teams.html' ),
        //     inject: true,
        //     chunks: [ 'add-teams' ]
        // })

    ]
}