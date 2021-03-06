var input = require("fs").readFileSync("var.txt", "utf8");
var lines = input.split("\n");

let data = [];
let nJogador = 0;
let response = [];

lines.forEach((item) => {
  let numberList = item
    .split(" ")
    .map((item, index) => (index === 1 ? Number(item) : item));
  data.push(numberList);
});

data = data.filter((item) => !!item[0]);

let generalInfoConfig = data.shift().map((item) => Number(item));

nJogador = Math.ceil(generalInfoConfig[0] / generalInfoConfig[1]);
let sortedData = data.sort((item1, item2) => item2[1] - item1[1]);

let players = [];

for (let indexResponse = 0; indexResponse < nJogador; indexResponse++) {
  let arrPlayersTeam = [];
  let currentNumberPlayers = sortedData.length;
  for (let indexPlayer = 0; indexPlayer < generalInfoConfig[1]; indexPlayer++) {
    if (currentNumberPlayers > 0) {
      arrPlayersTeam.push(sortedData[0][0]);
      sortedData.shift();
      currentNumberPlayers = currentNumberPlayers - 1;
    }
  }
  arrPlayersTeam.forEach((item, index) => {
    if (players[index]) {
      players[index].push(item);
    } else {
      players[index] = [item];
    }
  });
}

players.forEach((playerTeam, index) => {
  let numberTeam = index + 1;
  let sortedPlayerTeam = playerTeam.sort();
  let objectTeam = {
    name: "Time " + numberTeam,
    player: sortedPlayerTeam,
  };
  response.push(objectTeam);
});

response.forEach((team, index) => {
  console.log(team.name);
  team.player.forEach((player) => {
    console.log(player);
  });
  if (index !== response.length - 1) {
    console.log("");
  } else {
    console.log("");
  }
});
