const CloudWatchClient = require('../services/cloudwatch_client');
const S3Client = require('../services/s3_client');
const BUCKET = process.env.BUCKET;

exports.handler = async () => {
  console.log('Hello from lambda');

  const cloudwatch_client = new CloudWatchClient();

  const ret = await cloudwatch_client.getMetrics('Duration');
  const data = ret.MetricDataResults[0].Values;

  const s3_client = new S3Client();

  const file_name = new Date().toISOString().substring(0, 10);

  await s3_client.uploadObject(BUCKET, file_name, data.toString());
};
