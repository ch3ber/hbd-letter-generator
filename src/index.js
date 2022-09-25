import inquirer from 'inquirer'

import { banner } from './utils/banner.js'
import { option1 } from './options/option1.js'
import { option2 } from './options/option2.js'

const options = {
  'Create letter in .txt file': (preview) => option1(preview),
  'Create letter in a website': (preview) => option2(preview),
  Exit: () => process.exit(0)
}

const resolveAnswers = (answers) => {
  if (answers.showPreview) {
    options[answers.task](answers.showPreview)
  }

  if (!answers.showPreview) {
    options[answers.task]()
  }

  app()
}

const app = () => {
  console.clear()
  console.log(banner())

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'task',
        message: 'What do you want to do?',
        choices: Object.keys(options)
      },
      {
        type: 'confirm',
        name: 'showPreview',
        message: 'Do you want show preview?',
        when (answers) {
          if (answers.task === 'Exit') {
            options.Exit()
          }

          return answers
        }
      }
    ])
    .then((answers) => {
      resolveAnswers(answers)
    })
    .catch((error) => {
      console.log(error)
    })
}

app()
