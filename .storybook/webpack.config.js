// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/docs/react-storybook/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  // plugins: [
  //   // your custom plugins
  // ],
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: [/node_modules/, /public/]
        },
        {
            test: /\.(css|less)$/,
            loader: "style-loader!autoprefixer-loader",
            exclude: [/node_modules/, /public/]
        },
        {
            test: /\.gif$/,
            loader: "url-loader?limit=10000&mimetype=image/gif"
        },
        {
            test: /\.jpg$/,
            loader: "url-loader?limit=10000&mimetype=image/jpg"
        },
        {
            test: /\.png$/,
            loader: "url-loader?limit=10000&mimetype=image/png"
        },
        {
            test: /\.svg/,
            loader: "url-loader?limit=26000&mimetype=image/svg+xml"
        },
        {
            test: /\.jsx$/,
            loader: "react-hot!babel",
            exclude: [/node_modules/, /public/]
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        }
    ],
  },
};
