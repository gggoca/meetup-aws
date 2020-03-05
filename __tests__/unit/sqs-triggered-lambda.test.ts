import * as func from '../../lambdas/sqs-triggered-lambda';

test('Sum of two numbers', async () => {
  let Records:any = {"Records" : [{"body":'{ "a":5, "b":7 }',"messageId":'1234abc',"receiptHandle":'asdfg',"messageAttributes":{},"md5OfBody":'99914b932bd37a50b983c5e7c90ae93b',"eventSource":'aws:sqs',"eventSourceARN":'arn:aws:sqs:eu-west-1:630698576776:meetup-queue-gggoca',"awsRegion":'eu-west-1',"attributes":{}}]};

  expect(await func.HelloYou(Records)).toBe(12);
});