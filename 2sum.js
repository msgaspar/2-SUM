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

  const [start, end] = [-10000, 10000];

  const h = new Map();

  data.forEach(i => h.set(i, true));

  let count = 0;

  for (let t = start; t <= end; t++) {
    console.log(t);
    for (let i = 0; i < data.length; i++) {
      const y = t - data[i];
      if (y !== data[i] && h.get(y)) {
        count += 1;
        break;
      }
    }
  }

  console.log(count);
}

twosum();
