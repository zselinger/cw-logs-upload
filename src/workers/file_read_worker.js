const fs = require('fs');

exports.handler = async () => {
  console.log('Hello from lambda');

  const data = fs.readFileSync('/mnt/efs/test.txt');
  console.log(data.toString());
};
