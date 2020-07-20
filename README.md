vercel/pkg Playground
=====================

[vercel/pkg](https://github.com/vercel/pkg) によるシングルバイナリファイル生成を試すためのリポジトリ。

## Installation

```
$ npm install
```

## Usage

```
$ npm run build
```

を実行すると

- `index-macos`
- `index-linux`
- `index-win.exe`

を生成します。

MacOS の場合、

```sh
$ ./index-macos get-record \
  --KINTONE_BASE_URL=https://<YOUR_KINTONE_SUBDOMAIN>.cybozu.com \
  --KINTONE_USERNAME=<YOUR_KINTONE_USERNAME> \
  --KINTONE_PASSWORD=<YOUR_KINTONE_PASSWORD> \
  --app=<APP_ID> \
  --id=<RECORD_ID>
```

のように実行すると指定したレコードの情報が出力されます。

## Known Issues

- Node v10 系だと Windows 向けにビルドしたファイルが期待通り動作しない。v12 系でビルドすると動作する

## TODO

- [ ] `pkg` コマンドに渡せるオプションについて調べる

## Sample Scripts

- [`hello.js`](./hello.js)
  - `console.log` だけやるスクリプト
- [`index.js`](./index.js)
  - `yargs` を使い、引数も扱えるかどうかを検証するためのスクリプト
