'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function timeConversion(s) {
    const date_array = s.slice(0, s.length - 2).split(':');

  if (s.slice(s.length - 2) == 'PM') {
    date_array[0] != '12' && (date_array[0] = Number(date_array[0]) + 12);
  } else {
    date_array[0] == '12' && (date_array[0] = '00');
  }
  return date_array.join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
