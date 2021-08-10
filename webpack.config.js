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
       "user_dashboard": "./public/js/user_dashboard.js",
       "personal_info": "./public/js/personal_info.js",
       "user_update": "./public/js/user_update.js",
       "ridebook" : "./public/js/ridebook.js",
       "driver_login": "./public/js/driver_login.js",
       "driver_dashboard": "./public/js/driver_dashboard.js",
       "free_cab": "./public/js/freecab.js",
       "user_registration": "./public/js/user_registration.js",
       "driver_profile": "./public/js/driver_profile.js",
       "driver_trips": "./public/js/driver_trips.js",
       "user_trip": "./public/js/user_trip.js",
       "driver_update": "./public/js/driver_update.js"
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
            title: 'Driver Login',
            filename: './driver_login.html',
            template: path.join( __dirname, 'public', 'driver_login.html' ),
            inject: true,
            chunks: [ 'driver_login']
        }),

        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './user_update.html',
            template: path.join( __dirname, 'public', 'user_update.html' ),
            inject: true,
            chunks: [ 'user_update']
        }),

        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './user_trip.html',
            template: path.join( __dirname, 'public', 'user_trip.html' ),
            inject: true,
            chunks: [ 'user_trip']
        }),

        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './driver_update.html',
            template: path.join( __dirname, 'public', 'driver_update.html' ),
            inject: true,
            chunks: [ 'driver_update']
        }),


        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './driver_profile.html',
            template: path.join( __dirname, 'public', 'driver_profile.html' ),
            inject: true,
            chunks: [ 'driver_profile']
        }),

        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './driver_trips.html',
            template: path.join( __dirname, 'public', 'driver_trips.html' ),
            inject: true,
            chunks: [ 'driver_trips']
        }),

        new HtmlWebpackPlugin({
            title: 'User Registration',
            filename: './user_registration.html',
            template: path.join( __dirname, 'public', 'user_registration.html' ),
            inject: true,
            chunks: [ 'user_registration']
        }),


        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './freecab.html',
            template: path.join( __dirname, 'public', 'freecab.html' ),
            inject: true,
            chunks: [ 'freecab']
        }),


        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './driver_login.html',
            template: path.join( __dirname, 'public', 'driver_login.html' ),
            inject: true,
            chunks: [ 'driver_login']
        }),


        new HtmlWebpackPlugin({
            title: 'User Update',
            filename: './driver_dashboard.html',
            template: path.join( __dirname, 'public', 'driver_dashboard.html' ),
            inject: true,
            chunks: [ 'driver_dashboard']
        }),


        new HtmlWebpackPlugin({
            title: 'Ride Book',
            filename: './ridebook.html',
            template: path.join( __dirname, 'public', 'ridebook.html' ),
            inject: true,
            chunks: [ 'ridebook']
        }),

        
            new HtmlWebpackPlugin({
                title: 'User Dashboard',
                filename: './user_dashboard.html',
                template: path.join( __dirname, 'public', 'user_dashboard.html' ),
                inject: true,
                chunks: [ 'user_dashboard']
            }),

            new HtmlWebpackPlugin({
                title: 'User Personal Info',
                filename: './personal_info.html',
                template: path.join( __dirname, 'public', 'personal_info.html' ),
                inject: true,
                chunks: [ 'personal_info']
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