let teams = [
  { name: "Team A", results: [], points: 0 },
  { name: "Team B", results: [], points: 0 },
  { name: "Team C", results: [], points: 0 },
  { name: "Team D", results: [], points: 0 },
  { name: "Team E", results: [], points: 0 },
  { name: "Team F", results: [], points: 0 },
  { name: "Team G", results: [], points: 0 },
  { name: "Team H", results: [], points: 0 },
  { name: "Team I", results: [], points: 0 },
  { name: "Team J", results: [], points: 0 },
  { name: "Team K", results: [], points: 0 },
  { name: "Team L", results: [], points: 0 },
  { name: "Team M", results: [], points: 0 },
  { name: "Team N", results: [], points: 0 },
  { name: "Team O", results: [], points: 0 },
  { name: "Team P", results: [], points: 0 },
  { name: "Team Q", results: [], points: 0 },
  { name: "Team R", results: [], points: 0 },
  { name: "Team S", results: [], points: 0 },
  { name: "Team T", results: [], points: 0 },
];

const playMatch = function (a, b) {
  let scoreA;
  let scoreB;

  scoreA = Math.floor(Math.random() * 6);
  scoreB = Math.floor(Math.random() * 6);

  handleResults(a, b, scoreA, scoreB);
};

const handleResults = function (a, b, x, y) {
  if (x < y) {
    console.log(b.name + " is the winner");
    b.points += 3;
    a.results.push("L");
    b.results.push("W");
  } else if (x > y) {
    console.log(a.name + " is the winner");
    a.points += 3;
    a.results.push("W");
    b.results.push("L");
  } else {
    console.log(a.name + " drawed with " + b.name);
    a.points++;
    b.points++;
    a.results.push("D");
    b.results.push("D");
    console.log(a.results);
  }
};

const simulateLeague = function (ts) {
  for (let i = 0; i < ts.length; i++) {
    for (let j = 0; j < ts.length; j++) {
      if (i != j) {
        playMatch(ts[i], ts[j]);
      }
    }
  }

  console.log(teams);
};

simulateLeague(teams);
