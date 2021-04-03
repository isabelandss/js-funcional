const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
const exibirConteudo = (_, conteudo) => console.log(conteudo.toString())

fs.readFile(caminho, {}, exibirConteudo)