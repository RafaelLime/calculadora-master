function calcular(){
    let capital_inicial=document.getElementById('capital').value
    let taxa = document.getElementById('taxa').value
    let tempo = document.getElementById('tempo').value
    let juros = (capital_inicial*taxa*tempo)/100
    document.getElementById('result').innerHTML = "Juros = R$"+juros
}
function limpar(){
    document.getElementById('result').innerHTML=""
}