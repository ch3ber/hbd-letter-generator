import { promises as fs } from 'fs'
import path from 'path'
import config from '../../config.js'
import constants from '../constants.js'
import optionMenuControler from '../controlers/optionMenu.controler.js'

export default async () => {
  console.clear()
  console.log('[*] Generating your letter...')

  const letter = await fs.readFile(path.resolve('src/templates/letter.txt'), { encoding: 'utf-8' })

  const newLetter = letter
    .replaceAll(constants.profile.name, config.profile.name)
    .replace(constants.profile.age, config.profile.age)
    .replace(constants.profile.dateOfBirth, config.profile.dateOfBirth)
    .replace(constants.owner.name, config.owner.name)
    .replace(constants.letter.content, config.letter.content)

  await fs.writeFile(path.resolve('output/letter.txt'), optionMenuControler)

  console.log('[*] process complete!')

  console.log(optionMenuControler)
  optionMenuControler(false)
}
