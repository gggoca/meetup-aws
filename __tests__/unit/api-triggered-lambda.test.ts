import * as func from '../../lambdas/api-triggered-lambda';
import { APIGatewayEvent } from 'aws-lambda';
let data = require('./events/apigateway.json');

test('Sum of two numbers', async () => {
  let Records: APIGatewayEvent = data;
  let result = await func.HelloYou(Records);
  //console.log(JSON.parse(result.body).result);

  expect(JSON.parse(result.body).result).toBe(2);
});