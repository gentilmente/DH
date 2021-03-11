const a = [23, 45, 32];
const b = [12, 67, 7];

function findWinner(a, b, callback) {
  let firstParticipantScore = 0;
  let secondParticipantScore = 0;
  for (let i = 0; i < 3; i++) {
    //¿se podría usar for of?
    if (a[i] > b[i]) {
      firstParticipantScore++;
    } else if (a[i] < b[i]) {
      secondParticipantScore++;
    }
  }
  return callback(firstParticipantScore, secondParticipantScore);
}

const showOutputLog = (p1, p2) => {
  let winner = "";
  if (p1 > p2) {
    winner = "first";
  } else {
    winner = "second";
  }
  return console.log("the winner is: " + winner + " participant");
};

const showOutputTable = (ar, br) => console.table({ ar, br });

findWinner(a, b, showOutputLog);

findWinner(a, b, showOutputTable);
