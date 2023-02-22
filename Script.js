function calcular(){
    let Capital_inicial = document.getElementById('capital').value
    let taxa = document.getElementById('taxa').value
    let tempo = document.getElementById('tempo').value
    let montante = Capital_inicial*((taxa/100)+1)**tempo
    document.getElementById('result').innerHTML = "Montante final = R$"+Math.round(montante)
}
function limpar(){
    document.getElementById('result').innerHTML=""
}