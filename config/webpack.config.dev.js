const config = require("./webpack.config");

config.mode = "development";

config.devServer = {
    port: 8000,
    hot: true,
    open: true
}

module.exports = config;