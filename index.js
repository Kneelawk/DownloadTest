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
