// import
// nodejs 에서 언제든지 사용할 수 잇는 path 변수 설정
const path = require("path");

// npm i -D html-webpack-plugin html 파일 가져오기
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// export
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점(entry) 설정
  entry: "./js/main.js",
  // 결과물(번들)을 변환하는 설정
  output: {
    //node - path 모듈 호출
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
    // clean: true 을 통해 기존에 만들었던 build를 삭제해주고 다시 결과물을 만들수 있다.
    // output 은 nodejs에서 요구하는 절대경로를 명시해줘야 한다.
  },

  // loader style css
  module: {
    rules: [
      {
        // scss , css 파일 모두 매치(.s?css$)
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          // css-loader 는 자바스크립트에서 css파일을 해석하는 용도로 실제로 html 부분에 사용한다.
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    host: "localhost",
  },
};
