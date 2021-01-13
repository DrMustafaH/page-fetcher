const myArgs = process.argv.slice(2);
const request = require('request');
const fs = require('fs')


request(myArgs[0], (error, response, body) => {
  const strRes = JSON.stringify(body)
  const byteCount = strRes.length;
  fs.writeFile(myArgs[1], strRes, () => {
    console.log(`Downloaded and saved ${byteCount} bytes to ${myArgs[1]}`);
  });
})