var valorFinanciamento = document.getElementById('valor-financiamento')
var prazoAno = document.getElementById('prazo')
var jurosAno = document.getElementById('juros-ano')
var prazoMes = document.getElementById('prazo-mes')
var jurosMes = document.getElementById('juros-mes')
var jurosAcumulados = document.getElementById('juros-acumulados')
var amortizacao = document.getElementById('amortizacao')
var amortizacoes = document.getElementsByName('amortizacao')
var jurosTabela = document.getElementsByName('juros')
var somaTotal = document.getElementsByName('total')


function simula() {
    prazoMes.value = prazoAno.valueAsNumber * 12;
    jurosMes.value = (1 + jurosAno.valueAsNumber) ** (1/12) - 1;
    var saldoDevedor = 200000000 - 2000000 * jurosMes;
    amortizacao.innerHTML = valorFinanciamento.valueAsNumber / prazoMes.value;
    var juros = saldoDevedor * jurosMes.value;
    console.log(juros);
    var jurosTotal = amortizacao + juros;
    console.log(amortizacoes[0]);
    for (var i = 0; i <= 4; i++) {
        amortizacoes[i].innerHTML = valorFinanciamento.valueAsNumber / prazoMes.value;
        var jurosM = ((i + 1) + jurosAno.valueAsNumber) ** ((i+1)/12) - 1;
        jurosTabela[i].innerHTML = jurosM;

    }
}