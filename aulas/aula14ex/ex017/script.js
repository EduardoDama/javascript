function gerar(){
    var num = document.getElementById('n1').value
    var resp = document.getElementById('r')
    resp.innerHTML = ''

    if(num.length == 0){
        alert('[ERRO] número inválido')
    }
    else{
        for (var c = 1; c <= 10; c++) {
            var option = document.createElement('option')
            option.text = `${num} X ${c} = ${num*c} `
            resp.appendChild(option)
        }
    }

}


    let vaga = ['Eduardo', 'Damasceno', 'Lima ', 'Fernanda', 'Damasceno']

    console.log(vaga)