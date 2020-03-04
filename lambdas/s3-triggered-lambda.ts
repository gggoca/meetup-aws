import { S3CreateEvent } from 'aws-lambda';

export const ingestStart = async (event: S3CreateEvent) => {
  for (let i: number = 0; event.Records && i < event.Records.length; i++) {
    let record = event.Records[i];
    let srcBucket = record.s3.bucket.name;

    if (record.eventName.startsWith('ObjectCreated:')) {
    
      return 1234;
    } else {
      let msg: string = `Unhandled S3 event ${record.eventName}, skipping ingest for ${JSON.stringify(record)}...`;
      return msg;
    }
  }
};