const {
  CloudWatchClient,
  GetMetricDataCommand,
  ListMetricsCommand,
} = require('@aws-sdk/client-cloudwatch');

class CloudWatch {
  constructor() {
    this.cw = new CloudWatchClient({ region: 'eu-south-1' });
  }

  async getMetrics() {
    const command = new GetMetricDataCommand({
      StartTime: new Date('2022-04-01'),
      EndTime: new Date(),
      MetricDataQueries: [
        {
          Id: 'some_id',
          MetricStat: {
            Metric: {
              Namespace: 'AWS/Lambda',
              MetricName: 'Duration',
              Dimensions: [
                {
                  Name: 'FunctionName',
                  Value: 'cw-logs-upload-dev-cwLogsWorker',
                },
              ],
            },
            Period: 300,
            Stat: 'Average',
          },
        },
      ],
    });

    return await this.cw.send(command);
  }

  async listMetrics() {
    const command = new ListMetricsCommand({});
    return await this.cw.send(command);
  }
}

module.exports = CloudWatch;
