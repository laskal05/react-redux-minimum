const zopfli = require("node-zopfli"); // eslint-disable-line
const CompressionPlugin = require("compression-webpack-plugin"); // eslint-disable-line
const TerserPlugin = require("terser-webpack-plugin"); // eslint-disable-line

// eslint-disable-next-line
module.exports = {
  mode: "production",
  entry: "./src/main.tsx",
  output: {
    path: `${__dirname}/public/assets`, // eslint-disable-line
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 拡張子 .ts もしくは .tsx の場合
        use: "ts-loader" // TypeScript をコンパイルする
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    // new CompressionPlugin({
    //   test: /.(css)|(js)$/,
    //   deleteOriginalAssets: true,
    //   // eslint-disable-next-line
    //   algorithm(input, compressionOptions, callback) {
    //     return zopfli.gzip(input, compressionOptions, callback);
    //   }
    // })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        // extractComments: 'all', License file is created
        terserOptions: {
          output: {
            comments: false
          },
          compress: {
            drop_console: true // eslint-disable-line
          }
        }
      })
    ]
  },
  devServer: {
    compress: true,
    contentBase: `${__dirname}/public` // eslint-disable-line
  }
};
