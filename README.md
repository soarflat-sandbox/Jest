# Jest

## モック関数（Mock Functions）

モック関数は

- 関数の実際の実装を消去する
- 関数の呼び出しとそれらの呼び出しで渡されたパラメータを取得する
- newでインスタンス化されたときにコンストラクタ関数のインスタンスを取得する
- テスト時に戻り値の設定を可能にする

モック関数は、関数の実際の実装を消去することで、

コード間のリンクを簡単にテストできます。

ファンクションをモックするには、テストコードで使用するモック関数を作成する方法と、モジュール依存関係をオーバーライドする手動モックを作成する方法の2通りがあります。

### モック関数を利用してみる
関数`forEach`の実装をテストしていて、与えられた配列の各項目のコールバックを呼び出しているとする。

```javascript
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
```

この関数をテストするために、モック関数を使用してモックの状態を調べてコールバックが期待どおりに呼び出されるようにする。

```javascript
const mockCallback = jest.fn();
forEach([0, 1], mockCallback);

// モック関数が2回コールされる
expect(mockCallback.mock.calls.length).toBe(2);

// 関数への最初の呼び出しの最初の引数は0
expect(mockCallback.mock.calls[0][0]).toBe(0);

//関数への2番目の呼び出しの最初の引数は1
expect(mockCallback.mock.calls[1][0]).toBe(1);
```