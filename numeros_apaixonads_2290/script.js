var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

for (var index = 0; index <= lines.length; index++) {
  var item = lines[index];
  var numberList = item.split(" ").map((item) => Number(item));
  if (numberList[0] === 0) {
    break;
  }
  var orderArray = numberList.sort((item1, item2) => item1 - item2);
  if (index % 2 !== 0) {
    for (var i = 0; i < orderArray.length; i += 2) {
      var itemToTest = orderArray.slice(i, i + 2);
      if (itemToTest[0] !== itemToTest[1]) {
        if (itemToTest[1] !== undefined) {
          console.log(itemToTest[0] + " " + itemToTest[1]);
        } else {
          console.log(itemToTest[0], itemToTest);
        }
      }
    }
  }
}
