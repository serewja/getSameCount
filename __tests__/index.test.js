import getSameCount from "../dist/index.js"

test('test', () => {
  expect(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])).toBe(3);
  expect(getSameCount([1, 4, 4], [4, 8, 4])).toBe(1);
  expect(getSameCount([1, 10, 3], [10, 100, 35, 1])).toBe(2);
  expect(getSameCount([], [])).toBe(0);
});