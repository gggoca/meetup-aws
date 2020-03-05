import * as func from '../../lambdas/s3-triggered-lambda';

test('Sum of two numbers', async () => {
  let Records:any = {"Records" : [{"eventVersion":'2.1',"eventSource":'aws:s3',"awsRegion":'eu-west-1',"eventTime":'2020-03-05T09:30:30.667Z',"eventName":'ObjectCreated:Put',"userIdentity":[Object],"requestParameters":[Object],"responseElements":[Object],"s3":[Object]}]};

  expect(await func.HelloYou(Records)).toBe(12);
});