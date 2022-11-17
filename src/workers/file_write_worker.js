const fs = require('fs');

exports.handler = async () => {
  console.log('Hello from lambda');

  fs.writeFileSync('/mnt/efs/test.txt', 'This is working with ssm');
};
