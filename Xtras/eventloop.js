console.log("1°");

function segunda(){
    console.log("2°");
}
//segunda();
setTimeout(segunda, 1000);

setTimeout(() => {
    console.log("3°");
}, 0);

console.log("4°");

setTimeout(() => {
    console.log("5°");
}, 500);