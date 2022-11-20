const CloudWatchClient = require('../services/cloudwatch_client');
const S3Client = require('../services/s3_client');

exports.handler = async () => {
  console.log('Hello from lambda');

  const cloudwatch_client = new CloudWatchClient();

  const ret = await cloudwatch_client.getMetrics('Duration');
  const data = ret.MetricDataResults[0].Values;

  const s3_client = new S3Client();

  const upload = await s3_client.uploadObject('test', 'test.txt', 'test');
};
