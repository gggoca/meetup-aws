import { SQSEvent, Context, SQSRecord } from 'aws-lambda';

export const HelloYou = async (event: SQSEvent) => {
  let record = JSON.parse(event.Records[0].body);
  let result = record.a + record.b
  
  console.log("Hello you! I am lambda! Nice to meet you. :D ");
  console.log(result);
  return result;
};