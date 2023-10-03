import path from "path";
import { Configuration, DefinePlugin, webpack } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

// import
// dotenv.config();
const config: Configuration = {
  mode: (process.env.NODE_ENV as "production" | "development" | undefined) ?? "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
};

export default config;