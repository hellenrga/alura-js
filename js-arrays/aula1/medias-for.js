const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

console.log(notasGerais)

let media = 0




for (let i = 0; i < notasGerais.length; i = i + 1) {
    for (let j = 0; j < notasGerais[i].length; j = j + 1) {
        media += notasGerais[i][j]/notasGerais[i].length
    }
}

console.log(media)

media = media/notasGerais.length

console.log(`A média geral é ${media}`)
