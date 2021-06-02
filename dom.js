let button = document.getElementById('button');
let nome = document.getElementById('nomeTxt');
let div = document.getElementById('resultado');
button.addEventListener('click',()=>{
    div.innerHTML += `
                        Nome: ${nome.value}
                        <br/>
                        `
})
// 1- O usuário informa o nome e a idade, em seguida retorne uma frase.
// 2- Peça três notas, em seguida retorne a média e a situação (7 ou superior aprovado, caso contrário reprovado)
// 3- Criar um conversor de moedas, informe o valor e o tipo de conversão: (Real para Euro, Real para Dólar, Euro para Real e Dólar para Real)
// 4- Desenvolva um sistema, onde o usuário informa a quantidade de cada nota (2, 5, 10, 25, 50, 100 e 200), em seguida retorne qual é a quantidade em reais que ele possui.
// 5- Crie um sistema de votação, haverá quatro candidatos. Exiba em tempo real a quantidade de votos e o percentual obtido por cada candidato.
