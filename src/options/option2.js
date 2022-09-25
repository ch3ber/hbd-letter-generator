import { promises as fs, existsSync } from 'fs'
import path from 'path'
import { exec } from 'child_process'

import config from '../../config.js'
import constants from '../constants.js'
import { showPreview } from '../utils/showPreview.js'

export const option2 = async (preview) => {
  if (!existsSync('./output')) {
    await exec('mkdir output')
  }

  const letter = await fs.readFile(path.resolve('src/templates/index.html'), { encoding: 'utf-8' })

  const newLetter = letter
    .replaceAll(constants.profile.name, config.profile.name)
    .replace(constants.profile.age, config.profile.age)
    .replace(constants.profile.dateOfBirth, config.profile.dateOfBirth)
    .replace(constants.owner.name, config.owner.name)
    .replace(constants.letter.content, config.letter.content)

  await fs.writeFile(path.resolve('output/letter.html'), newLetter)

  if (preview) {
    showPreview(newLetter)
  }
}
