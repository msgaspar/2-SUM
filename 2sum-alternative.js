const fs = require('fs');
const readline = require('readline');

// Read array from file
async function loadData() {
  const data = new Array();

  const readStream = fs.createReadStream(__dirname + '/2sum-input.txt');
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    data.push(Number(line));
  }

  return data;
}

// 2-Sum hash table implementation
// Return yes if there are two distinct numbers x and y that satisfy x + y = t
async function twosum() {
  const data = await loadData();
  data.sort((a, b) => a - b);

  const [start, end] = [-10000, 10000];

  const sums = new Set();

  let [theLo, theHi] = [0, data.length - 1];

  while (theHi > theLo) {
    if (data[theHi] + data[theLo] > end) {
      theHi -= 1;
      continue;
    }
    if (data[theHi] + data[theLo] < start) {
      theLo += 1;
      continue;
    }
    if (data[theHi] === data[theLo]) {
      break;
    }
    let theInLo = theLo;
    let sum = data[theInLo] + data[theHi];
    while (sum >= start && sum <= end) {
      sums.add(sum);
      theInLo += 1;
      if (data[theHi] === data[theLo]) {
        break;
      }
      sum = data[theInLo] + data[theHi];
    }
    theHi -= 1;
  }

  console.log(sums.size);
}

twosum();
