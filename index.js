const fs = require('fs');
const http = require('http');
const https = require('https');
const request = require('request');

const downloadUrl = 'https://addons.cursecdn.com/files/2231/53/OpenPeripheralIntegration-1.7.10-0.1.0.jar';

const outputDir = `${__dirname}/download_output`;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

let outputFileName = outputDir + '/' + downloadUrl.slice(downloadUrl.lastIndexOf('/') + 1);

let outputFile = fs.createWriteStream(outputFileName);

console.log('Downloading to: ' + outputFileName);

let size = 0;
let downloaded = 0;

request(downloadUrl).on('response', (response) => {
  size = response.headers['content-length'];
  console.log('Download size: ' + size);
}).on('data', (chunk) => {
  downloaded += chunk.length;
  console.log('Downloaded: ' + Math.floor(downloaded * 100 / size) + '%');
}).on('end', () => {
  console.log('Done.');
}).on('error', (err) => {
  console.log('Error: ' + err);
}).pipe(outputFile);
