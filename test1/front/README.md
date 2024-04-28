# これは何？

wordpressをheadless apiとして使用して遊ぶためのフロント側開発環境。
こっちはあくまで静的ページとして作成する。
サーバー構成としては、cloudframeにそのままアップロードするイメージ。wordpress側をwebサーバーとしてheroku等にあげるイメージ。

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm start
```

### Compile and Minify for Production

```sh
npm run build
```
