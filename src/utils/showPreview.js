import { exec } from 'node:child_process'
import http from 'http'

export const showPreview = (previewFile) => {
  http.createServer((req, res) => {
    res.write(previewFile)
    res.end()
  }).listen(3000)

  const url = 'http://localhost:3000'
  exec((process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open') + ' ' + url)
}
