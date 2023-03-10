const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      mode,
      entry: {
        app: "./src/index.tsx",
      },
      devServer: {
        port: 3000,
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/, // excluding the node_modules folder
            use: ["ts-loader"],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/, // excluding the node_modules folder
            use: ["babel-loader"],
          },
          {
            test: /\.(c|sa|sc)ss$/,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
          {
            test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
            use: [
              {
                loader: "url-loader", // transforms files into base64 URIs.
                options: { limit: false },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "public/index.html",
        }),
      ],
    },
    modeConfig(mode),
    presetsConfig({ mode, presets })
  );
};
