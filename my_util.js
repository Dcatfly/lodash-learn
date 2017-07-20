/**
 * Created by dcatfly on 2017/7/18.
 * 想把这个工程中的js文件列一个列表到readme，看完一个就勾上一个，但是工程文件太多了，就写了个这么个自动生成的工具。
 */
const fs = require('fs')
const os = require('os')

const titleTag = '##', writeName = 'readme.md'
let blackList = ['node_modules', '.github', '.idea', 'CHANGELOG', '.gitignore', '.editorconfig', '.eslintrc.js', '.gitattributes', 'LICENSE', 'my_util.js', 'package.json', 'README.md', '.git', '.github']

const body = fs.readFileSync(writeName, 'utf-8')


const writeHandle = fs.createWriteStream(writeName)

writeHandle.write(body)

const readDirWithCD = (path, cd, stackPath = '', isDirectory = true) => {
  const fileName = path.substring(path.lastIndexOf('/') + 1)
  if (blackList.indexOf(fileName) === -1) {
    if (isDirectory) {
      stackPath = stackPath ? `${stackPath}/${fileName}` : fileName
      cd({
        name: stackPath,
        'isDirectory': isDirectory
      })
      fs.readdir(path, 'utf8', (err, files) => {
        const queue = []
        if (err) {
          throw err
        } else {
          files.forEach((file) => {
            const stat = fs.statSync(`${path}/${file}`)
            if (stat.isFile()) {
              readDirWithCD(`${path}/${file}`, cd, stackPath, false)
            } else {
              queue.push(`${path}/${file}`)
            }
          })
          queue.forEach((path) => {readDirWithCD(path, cd, stackPath)})
        }
      })
    } else {
      cd({name: fileName})
    }
  }

}

readDirWithCD(__dirname, (fileInfo) => {
  const {name, isDirectory} = fileInfo
  if (isDirectory) {
    writeHandle.write(`${os.EOL}${titleTag} ${name}${os.EOL}${os.EOL}`)
  } else {
    writeHandle.write(`- [ ] ${name}${os.EOL}`)
  }
})

