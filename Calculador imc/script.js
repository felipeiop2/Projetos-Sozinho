
function verificar(){
    let nome = window.document.getElementById('nome')
    let sobrenome = window.document.getElementById('sobrenome')
    let peso = window.document.getElementById('peso')
    let altura = window.document.getElementById('altura')
    let res = window.document.getElementById('res')
    let res1 = parseFloat(peso.value) / parseFloat(altura.value)
    
    if(nome.value == "" || sobrenome.value == "" || peso.value == "" || altura.value == ""){
        res.innerHTML = `<strong> Atenção alguns dados não foram prenchidos corretamente </strong>`
    } else{
        let res2 = res1 / parseFloat(altura.value)
        res.innerHTML =`<strong> Ola ${nome.value} ${sobrenome.value}, seu imc é de ${res2.toFixed(2)} </strong>`
    }

}