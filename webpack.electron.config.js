const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  target: "electron-main",
  entry: "./src/electron/main.ts",
  output: {
    path: path.resolve(__dirname, ".next"),
    filename: "electron/[name].js",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
