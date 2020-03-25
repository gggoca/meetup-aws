import { Aws, Options } from 'aws-cli-js';
 
const options = new Options(
  /* accessKey    */ process.env.AWS_ACCESS_KEY_ID,
  /* secretKey    */ process.env.AWS_SECRET_ACCESS_KEY,
  /* sessionToken */ process.env.AWS_SESSION_TOKEN
);

describe('API triggered lambda', () => {
const aws = new Aws(options);
test('Lambda should return 12', async () => {
  await aws.command('lambda invoke --function-name meetup-aws-gggoca-api-triggered-lambda --payload file://__tests__/unit/events/apigateway.json --log-type Tail test_outputs/outputfile.json').then(function (data) {
  //console.log('data = ', data);
  let output = require('./../../../test_outputs/outputfile.json');

  let sc = output.statusCode;
  let by = JSON.parse(output.body).result;
  //console.log(by);
  expect(sc).toBe(200);
  expect(by).toBe(2)
});
},20000);
});