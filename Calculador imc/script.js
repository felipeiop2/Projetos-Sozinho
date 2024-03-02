
function verificar(){
    let nome = window.document.getElementById('nome')
    let sobrenome = window.document.getElementById('sobrenome')
    let peso = window.document.getElementById('peso')
    let altura = window.document.getElementById('altura')
    let res = window.document.getElementById('res')
    let res1 = Number(peso) / Number(altura)
    let res2 = res1 / altura
    res.innerHTML = (`Ola ${nome, sobrenome} seu IMC é de ${res2} `)

}