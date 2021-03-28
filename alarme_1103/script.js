var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

var data = [];

lines.forEach((item) => {
  var numberList = item.split(" ").map((item) => Number(item));
  data.push(numberList);
});

console.log(data);

var realData = [];

data.forEach((dateList) => {
  var dateListLength = dateList.filter((item) => item !== 0);
  if (dateListLength.length !== 0) {
    realData.push(dateList);
  }
});

realData.forEach((dateList) => {
  var result =
    dateList[2] * 60 + dateList[3] - (dateList[0] * 60 + dateList[1]);
  if (result < 0) {
    console.log(result + 1440);
  } else {
    console.log(result);
  }
});
