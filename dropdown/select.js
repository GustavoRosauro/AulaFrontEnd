let drop = document.getElementById('drop');
let button = document.getElementById('button');
let valor = document.getElementById('valor');
let resultado = document.getElementById('resultado');
button.addEventListener('click',()=>{
    switch(drop.value){
        case "1":
            converterRealParaEuro();
            break;
        case "2":
            alert("valor 2 foi selecionado");
            break;
        case "3":
            alert("valor 3 foi selecionado");
            break;
        default:
            alert("opção não reconhecida")
            break;
    }
});
const converterRealParaEuro =()=>{
    let conversao = parseFloat(valor.value) / 6.29;    
    resultado.innerHTML = `<h1>${conversao.toFixed(2)}</h1>`
}
// Criar um conversor de moedas, informe o valor e o tipo de conversão: (Real para Euro, Real para Dólar, Euro para Real e Dólar para Real)
