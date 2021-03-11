const a = [23, 45, 32];
const b = [12, 67, 7];

function findWinner(a, b) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      first++;
    } else if (a[i] < b[i]) {
      second++;
    }
  }
  if (first > second) {
    return "first";
  } else {
    return "second";
  }
}
// primera etapa
console.log(findWinner(a, b));
