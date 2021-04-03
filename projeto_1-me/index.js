const { getFileContents, getFiles, getFilesByExtension, getFileContent } = require('./functions')


getFiles()
  .then(getFilesByExtension)
  .then(getFileContents)