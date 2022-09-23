import menuControler from "./controlers/menu.controler.js"
import menu from './views/menu.view.js'
import readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(menu(), (selectedOption) => {
  menuControler(selectedOption)
  rl.close()
});
