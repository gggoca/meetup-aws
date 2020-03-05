import { S3CreateEvent } from 'aws-lambda';

export const HelloYou = async (event: S3CreateEvent) => {
  for (let i: number = 0; event.Records && i < event.Records.length; i++) {
    console.log(event);
    let record = event.Records[i];
    //let srcBucket = record.s3.bucket.name;

    if (record.eventName.startsWith('ObjectCreated:')) {
      console.log("1234");
      let a:number=7;
      let b:number=5;
      return a+b;
    } else {
      let msg: string = `Unhandled S3 event ${record.eventName}, skipping ingest for ${JSON.stringify(record)}...`;
      return msg;
    }
  }
};