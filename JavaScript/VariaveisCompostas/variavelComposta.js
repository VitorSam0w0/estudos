let num = [5,8,4]

num[3] = 6

num.push(7)  //Para forçar o vetor a receber um novo valor no caso '7'
num.push(1)
num.push(2)
num.push(3)

//let numSize = num.length //Para ver o tamanho de vetor

//num.sort()  //Para colocar em ordem crescente

console.log(`Nosso vetor é ${num} e tem o tamanho de ${num.length}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)   //Comandos for simplificado que funciona apenas com Arrays
}

let position = num.indexOf(7)   //indexOf(valor) para saber se tem o valor e em qual posição ele está

console.log(`O Valor 7 tem e está na posição ${position}`)