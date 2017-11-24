import forEach from '../src/forEach';

describe('forEach', () => {
  const mockCallback = jest.fn();

  test('モック関数が2回コールされる', () => {
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test('関数への最初の呼び出しの最初の引数は0', () => {
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  test('関数への2番目の呼び出しの最初の引数は1', () => {
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
});
