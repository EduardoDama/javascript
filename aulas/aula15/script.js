let num = [5, 8, 2, 9, 3, 6, 5]

num.push(1)
num.sort()
console.log(`o nosso vetor é ${num}`)
console.log(`o tamanho do nosso vetor é ${num.length}`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log('O valor não foi encontrado!')  
}
else{
   console.log(`A posição do número 8 é ${pos}`)
}
