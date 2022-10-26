const CloudWatchClient = require('../services/cloudwatch_client');

exports.handler = async () => {
  console.log('Hello from lambda');

  const cloudwatch_client = new CloudWatchClient();

  const ret = await cloudwatch_client.getMetrics();
  console.log(ret.MetricDataResults[0].Values);
};
