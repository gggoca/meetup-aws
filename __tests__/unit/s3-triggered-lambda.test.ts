import * as func from '../../lambdas/s3-triggered-lambda';
import { S3Event, S3CreateEvent } from 'aws-lambda';
let data = require('./events/s3event.json');

test('Sum of two numbers', async () => {
  let Records:S3CreateEvent = data;

  expect(await func.HelloYou(Records)).toBe(12);
});