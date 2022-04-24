

# Hikaku


## Web サーバの起動方法(on Docker)

1.  `docker-compose.yml` のあるディレクトリに移動
2.  `docker-compose up` でイメージのビルド，コンテナの立ち上げ．デフォルトで Flask サーバが起動する．
    -   Ctrl + C で終了
    -   `docker-compose down` でコンテナ削除


## Web サーバの起動方法(on Local)

1.  ライブラリのインストール

    `pip install -r requirements.txt`

2.  Flask 用の環境変数の設定

    Mac（Linux）の場合
    
    ```
    export FLASK_APP=flaskr
    export FLASK_ENV=development
    ```

    Windowsの場合
   
    ```
    set FLASK_APP=flaskr
    set FLASK_ENV=development
    ```

3.  サーバ起動

    `flask run`

## tailwindCSSについて（初回）

```
npm install -D tailwindcss
```    

## tailwindCSSについて（作業するとき）

-   tailwindCSSに触れる際、毎回ビルドする必要がある
    -   htmlファイルにtailwindCSSに関するコードを記述すると、CSSファイル(今回は、static/style/css/main.css)に加える処理を勝手にやってくれる

上記の処理を行う方法は以下の通り

1 .ディレクトリを移動（`tailwind.config.js`が含まれているディレクトリに移動）

```cd flaskr```

2 . 下記コードを実行

```
npx tailwindcss -i ./static/src/style.css -o ./static/css/main.css
```

*下のコマンドを実行すると、`ctrl + s` をするたびにtailwindCSSに対応するコードが書き加わる。

```
npx tailwindcss -i ./static/src/style.css -o ./static/css/main.css --watch
```

（いずれの場合も、下記のような記述がターミナルに出力されていればOK！）

```
Rebuilding...
Done in 39ms.
```

## イメージ

-   類似商品をを自分なりの項目で比較できるアプリ
    -   自分の味覚だけでは覚えていられず，比較が困難
        -> ラーメンなどの商品単位を自分で設定，比較したい項目（麺，スープ，具材など）も自分で設定し，スライダーや円チャートなどで複数商品を比較できる
    -   他の人との共有よりも個人のメモ用途が強い
    -   まずはラーメンに絞る


## 最低要件

-   まずはラーメンに絞る
-   最小機能
    -   商品登録機能
        -   各項目の点数を入力
        -   画像の追加
    -   表示機能
        -   入力を保存・削除しておき，リロード時に保持
            -   DB（バックエンド）


## 追加したい機能

-   比較項目をカスタマイズできる
-   比較方法をカスタマイズできる
    -   段階評価，ワード評価（こってり，あっさりなど）
-   コーヒーなど，別単位のものを設定できる
    -   その商品に対する比較項目をなににするか


## 必要技術

-   ちょっとモダンにするなら react, vue？
-   DB