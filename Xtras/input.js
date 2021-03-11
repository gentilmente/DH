console.log("running...");
const command = process.argv[2];
const params = process.argv.slice(2);
//console.log(process.argv);
console.log("comandos: ", command);
console.log("params: ", params);

// mockaroo.com
const jsonPath = path.join(__dirname + "tasks.json");
function readFile() {
  let rows = fs.readFileSync(jsonPath, "utf-8");
  return JSON.parse(rows)
}

switch (command) {
  case "listar":
      let tasks = readFile();
      tasks.forEach(task => {
          console.log('${task.title} (${task.status}'));
      });
    break;
}
