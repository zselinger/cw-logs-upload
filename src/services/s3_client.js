const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

class S3 {
  constructor() {
    this.s3 = new S3Client({ region: 'eu-south-1' });
  }

  async uploadObject(Bucket, Key, Body) {
    const bucketParams = {
      Bucket,
      Key,
      Body,
    };

    try {
      const data = await this.s3.send(new PutObjectCommand(bucketParams));
      console.log(data);
      console.log(
        'Successfully uploaded object: ' +
          bucketParams.Bucket +
          '/' +
          bucketParams.Key
      );
    } catch (err) {
      console.log('Error', err);
    }
  }
}

module.exports = S3;
