function promptNum(message, nullable = false) {
    const input = Number(prompt(message))
    if (nullable && !input)
        return null
    if (!Number(input)) {
        alert("Entrada inválida! Digite um número")
        promptNum(message)
    }
}

function ex01() {
    alert("Desafio: Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é menor que C.")

    const a = promptNum("Digite o valor de A")
    const b = promptNum("Digite valor de B")
    const c = promptNum("Digite o valor de C")

    if (a+b>c)
    alert("A soma entre A e B é maior que C")
    else
    alert("A soma entre A e B é menor que C")
}

function ex02() {
    alert("Desafio: Faça um algoritmo que leia dois valores inteiros A e B. se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário, deverá multiplicar A por B. Ao final, deve-se imprimir o resultado na tela.")

    const a = promptNum("Digite o valor de A")
    const b = promptNum("Digite o valor de B")

    const c = a === b ? a+b : a*b
    alert("O resultado é "+ c)
}

function ex03() {
    alert("Desafio: Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.")

    const num = promptNum("Digite o número")
    alert(`O antecessor de ${num} é ${num-1} e o sucessor é ${num+1}`)
}

function ex04() {
    alert("Desafio: Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).")

    let salMin = promptNum("Digite o valor do salário mínimo", true)
    if (salMin == null) salMin = 1293.20
    const salUser = promptNum("Digite o valor do salário do usuário")

    alert(`O usuário ganha ${salUser/salMin} salários mínimos`)
}

function ex05() {
    alert("Desafio: Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.")

    const nums = [
        promptNum("Digite o primeiro número"),
        promptNum("Digite o segundo número"),
        promptNum("Digite o terceiro número")
    ]

    alert("Números em ordem decrescente: "+ nums.sort((a, b) => a > b))
}

function ex06() {
    alert("Desafio: ")

}

function ex07() {
    alert("Desafio: ")

}

function ex08() {
    alert("Desafio: ")

}
