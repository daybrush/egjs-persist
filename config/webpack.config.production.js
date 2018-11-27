var merge = require("webpack-merge");
var webpack = require("webpack");
var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");
var uglifyConfig = require("./uglify");
var banner = require("./banner");

var config = {
	entry: {
		"persist": "./src/Persist.js",
		"persist.min": "./src/Persist.js",
		"persist-migrate": "./src/persist-migrate.js",
		"persist-migrate.min": "./src/persist-migrate.js",
	},
	module: {
		rules: [{
			test: /(\.js)$/,
			loader: "eslint-loader",
			include: path.resolve(process.cwd(), "src"),
			exclude: /(node_modules)/,
			enforce: "pre"
		}]
	},
	plugins: [
		new CleanWebpackPlugin([path.resolve(__dirname, "../dist")], {
			root: path.resolve(__dirname, "../"),
			verbose: true,
			dry: false
		}),
		new UglifyJSPlugin(uglifyConfig),
		new webpack.BannerPlugin(banner.common)
	]
};

module.exports = function (common) {
	return merge.strategy({
		entry: "replace",
		module: "append",
		plugins: "append"
	})(common, config);
};
