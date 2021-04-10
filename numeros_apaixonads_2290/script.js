console.time("time");
var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

let data = [];
let nData = [];

for (let lineIndex = 1; lineIndex < lines.length; lineIndex += 2) {
  let item = lines[lineIndex];
  let numberList = item.split(" ").map((item2) => Number(item2));
  data.push(numberList);
}

for (let lineIndexN = 0; lineIndexN < lines.length; lineIndexN += 2) {
  let item = lines[lineIndexN];
  let numberList = item.split(" ").map((item2) => Number(item2));
  nData.push(numberList);
}

for (let arrIndex = 0; arrIndex < data.length; arrIndex++) {
  if (nData[arrIndex][0] !== 0) {
    let arr = data[arrIndex];
    let cache = [];
    let arrCache = [];
    let arrResponse = [];
    let response = [];
    arr.forEach((item) => {
      if (!cache.includes(item)) {
        cache.push(item);
      }
    });
    cache.forEach((item) => {
      arr.forEach((arrItem) => {
        if (arrItem === item) {
          if (!arrCache.includes(arrItem)) {
            arrCache = [];
          }
          arrCache.push(arrItem);
        }
      });
      arrResponse.push(arrCache);
    });
    arrResponse.forEach((arrResponseItem) => {
      if (arrResponseItem.length % 2 !== 0) {
        response.push(arrResponseItem[0]);
      }
    });
    let sortedResponse = response.sort((item1, item2) => item1 - item2);
    console.log(sortedResponse[0], sortedResponse[1]);
  }
}
