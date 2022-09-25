import { promises as fs } from 'fs'
import path from 'path'
import config from '../config.js'

export default async () => {
  console.clear()
  console.log('[*] Generating your letter...')

  const letter = await fs.readFile(path.resolve('src/templates/letter.txt'), { encoding: 'utf-8' })

  const newLetter = letter
    .replace('[[name]]', config.name)
    .replace('[[age]]', config.age)
    .replace('[[dateOfBirth]]', config.dateOfBirth)

  await fs.writeFile(path.resolve('output/letter.txt'), newLetter)

  console.log('[*] process complete!')
}
