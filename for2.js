const a = [23, 45, 32];
const b = [12, 67, 57];

function findWinner(a, b) {
  let firstParticipantScore = 0;
  let secondParticipantScore = 0;

  // primera etapa
  if (a[0] > b[0]) {
    firstParticipantScore = firstParticipantScore + 1;
  } else if (a[0] < b[0]) {
    secondParticipantScore = secondParticipantScore + 1;
  }

  // segunda etapa
  if (a[1] > b[1]) {
    firstParticipantScore += 1;
  } else if (a[1] < b[1]) {
    secondParticipantScore += 1;
  }

  // tercera etapa
  if (a[2] > b[2]) {
    firstParticipantScore++;
  } else if (a[2] < b[2]) {
    secondParticipantScore++;
  }

  // comparación final
  if (firstParticipantScore > secondParticipantScore) {
    return "first";
  } else {
    return "second";
  }
}

console.log("the winner is: " + findWinner(a, b) + " participant");
