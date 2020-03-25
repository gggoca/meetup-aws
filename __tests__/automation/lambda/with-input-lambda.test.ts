import { Aws, Options } from 'aws-cli-js';
 
const options = new Options(
  /* accessKey    */ process.env.AWS_ACCESS_KEY_ID,
  /* secretKey    */ process.env.AWS_SECRET_ACCESS_KEY,
  /* sessionToken */ process.env.AWS_SESSION_TOKEN
);
 
describe('Just lambda', () => {
const aws = new Aws(options);
test('Lambda should return 12', async () => {
  await aws.command('lambda invoke --function-name meetup-aws-levi9-with-input-lambda --payload file://__tests__/unit/events/lambda-input.json --log-type Tail test_outputs/outputfiles5.json').then(function (data) {

  let output = require('./../../../test_outputs/outputfiles5.json');

  let sc = output

  expect(sc).toBe(12);

});
},20000);
});