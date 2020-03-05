import * as func from '../../lambdas/with-input-lambda';

test('Sum of two numbers', async () => {
  expect(await func.HelloYou({a:1,b:2})).toBe(3);
});
