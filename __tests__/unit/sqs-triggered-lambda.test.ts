import * as func from '../../lambdas/sqs-triggered-lambda';
let data = require('./events/sqsevent.json');
test('Sum of two numbers', async () => {
  let Records:any = data;

  expect(await func.HelloYou(Records)).toBe(12);
});