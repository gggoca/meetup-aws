import { Aws, Options } from 'aws-cli-js';
 
const options = new Options(
  /* accessKey    */ process.env.AWS_ACCESS_KEY_ID,
  /* secretKey    */ process.env.AWS_SECRET_ACCESS_KEY,
  /* sessionToken */ process.env.AWS_SESSION_TOKEN
);
 
describe('Just lambda', () => {
const aws = new Aws(options);
test('Lambda should return number less the 100', async () => {
  await aws.command('lambda invoke --function-name meetup-aws-levi9-just-lambda --payload {} --log-type Tail test_outputs/outputfiles4.json').then(function (data) {

  let output = require('./../../../test_outputs/outputfiles4.json');

  let sc = output
  expect(sc).toBeLessThan(100);

});
},20000);
});