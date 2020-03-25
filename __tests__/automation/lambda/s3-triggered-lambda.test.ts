import { Aws, Options } from 'aws-cli-js';
 
const options = new Options(
  /* accessKey    */ process.env.AWS_ACCESS_KEY_ID,
  /* secretKey    */ process.env.AWS_SECRET_ACCESS_KEY,
  /* sessionToken */ process.env.AWS_SESSION_TOKEN
);

describe('S3 triggered lambda', () => {
const aws = new Aws(options);
test('Lambda should return 12', async () => {
  await aws.command('lambda invoke --function-name meetup-aws-gggoca-s3-triggered-lambda --payload file://__tests__/unit/events/s3event.json --log-type Tail test_outputs/outputfiles3.json').then(function (data) {
  //console.log('data = ', data);
  let output = require('./../../../test_outputs/outputfiles3.json');

  let sc = output
  //let by = JSON.parse(output.body).result;
  //console.log(by);
  expect(sc).toBe(12);
  //expect(by).toBe(2)
});
},20000);
});