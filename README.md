

# Hikaku


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

# tailwindcss setup

<a href="https://tailwindcss.com/docs/installation">ここ</a>に載っている

＊補足資料 : <a href="https://reffect.co.jp/html/tailwindcss-for-beginners">利用者爆増中 初めてでもわかるTailwind CSS入門 基礎編</a>

## tailwindcssのフレームワークを反映させたいとき（フロントエンドをいじりたいとき）

1 . 下記コードをターミナルで叩く

```npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch```

2 . 作業開始。ctrl + s で保存すると、CSSコードが書き加えられている（下記のような記述がターミナルに出力されていればOK！）

```
Rebuilding...
Done in 39ms.
```