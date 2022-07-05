var nome = window.prompt('Nome do sobrevivente?')
window.alert ('bem vindo sobrevivente, ' + nome + '! Vamos fazer um quiz!')

var pontos = 0
let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')
let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')
let qmeio = document.querySelector('#qmeio')
let q11 = document.querySelector('#q11')
let q12 = document.querySelector('#q12')
let q13 = document.querySelector('#q13')
let q14 = document.querySelector('#q14')
let q15 = document.querySelector('#q15')
let q16 = document.querySelector('#q16')
let q17 = document.querySelector('#q17')
let q18 = document.querySelector('#q18')
let q19 = document.querySelector('#q19')
let q20 = document.querySelector('#q20')

let botao = document.querySelector('#enviar')


function enviar(){

    pontos=0

    if (q1.value == "opção 1") {
        pontos++
    }
    if (q2.value == "opção 1") {
       pontos++
    }    
    if (q3.value == "opção 2") {
        pontos++
    }
    if (q4.value == "opção 1") {
        pontos++
    }
    if (q5.value == "opção 2") {
        pontos++
    }
    if (q6.value == "opção 1") {
        pontos++
    }
    if (q7.value == "opção 2") {
        pontos++
    }
    if (q8.value == "opção 2") {
        pontos++
    }
    if (q9.value == "opção 1") {
        pontos++
    }
    if (qmeio.value == "opção 1") {
        pontos++
    }
    if (q11.value == "opção 2") {
        pontos++
    }
    if (q12.value == "opção 2") {
        pontos++
    }
    if (q13.value == "opção 1") {
        pontos++
    }
    if (q14.value == "opção 2") {
        pontos++
    }
    if (q15.value == "opção 2") {
        pontos++
    }
    if (q16.value == "opção 1") {
        pontos++
    }
    if (q17.value == "opção 1") {
        pontos++
    }
    if (q18.value == "opção 2") {
        pontos++
    }
    if (q19.value == "opção 1") {
        pontos++
    }
    if (q20.value == "opção 1") {
        pontos++
    }  
    pontuacao.textContent = String(nome+" seu resultado final foi de "+pontos+" pontos!");

} 