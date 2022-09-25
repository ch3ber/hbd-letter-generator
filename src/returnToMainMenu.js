import menuControler from './controlers/menu.controler.js'
import menu from './views/menu.view.js'
import readLine from 'readline'

export default () => {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question(menu(), (selectedOption) => {
    rl.close()
    menuControler(selectedOption)
  })
}
