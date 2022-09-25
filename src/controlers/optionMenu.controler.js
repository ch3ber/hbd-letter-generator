import { promises as fs } from 'fs'
import path from 'path'
import readLine from 'readline'
import http from 'http'
import returnToMainMenu from '../returnToMainMenu.js'
import optionMenuView from '../views/optionMenu.view.js'

export default function optionMenuControler (isWeb) {
  optionMenuView()

  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question(optionMenuView(), (selectedOption) => {
    const readContinue = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    /*
    * options
    * 1 => show prview
    * 2 => return to main menu
    * 00 => Exit
    */

    const options = {
      1: (isWeb) => {
        if (!isWeb) {
          fs.readFile(path.resolve('output/letter.txt'), { encoding: 'utf-8' })
            .then(letter => {
              console.clear()
              console.log(letter)
              readContinue.question('\nPress enter to continue...', () => {
                readContinue.close()
              })
            })
        }

        http.createServer((req, res) => {
          fs.readFile(path.resolve('output/letter.html'), { encoding: 'utf-8' })
            .then(letter => {
              res.writeHead(200, { 'Content-Type': 'text/html' })
              res.end(letter)
            })
        }).listen(3000)

        console.log('Open http://localhost:3000 to see your web letter')

        readContinue.question('\nPress enter to continue...', () => {
          readContinue.close()
        })
      },
      2: returnToMainMenu,
      '00': () => process.exit(0)
    }

    rl.close()
    options[`${selectedOption}`](isWeb)
  })
}
