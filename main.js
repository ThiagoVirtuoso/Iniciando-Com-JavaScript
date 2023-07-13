// Ex. 1
alert("Hello World!")

// Ex. 2
let number1 = 1
let number2 = 5
const sum = number1 + number2

alert(`O resultado da soma é: ${sum}`)

// Ex. 3
let number = 10

if (typeof number == 'number') {
  alert("É um número.")
} else {
  alert("Não é um número.")
}

// Ex. 4
let string = "Hello World!"

if (typeof string == 'string') {
  alert("É uma string.")
} else {
  alert("Não é uma string.")
}

// Ex. 5
let boolean = true

if (typeof boolean == 'boolean') {
  alert("É um booleano.")
} else {
  alert("Não é um booleano.")
}

// Ex. 6
const sub = number1 - number2
alert(`O resultado da subtração é: ${sub}`)

// Ex. 7
const mult = number1 * number2
alert(`O resultado da mutiplicação é: ${mult}`)

// Ex. 8
const div = number1 / number2
alert(`O resultado da divisão é: ${div}`)

// Ex. 9
const isEven = ((number % 2) == 0) ? "É um número par" : "Não é um número par"
alert(isEven)

// Ex. 10
const isOdd = ((number % 2) != 0) ? "É um número ímpar" : "Não é um número ímpar"
alert(isOdd)