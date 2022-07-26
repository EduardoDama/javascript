let nuns = []
let soma = 0
let maior = 0
let menor = 0
function adicionar() {
    let num = Number(document.getElementById('num').value) 
    let resp = document.getElementById('mostra')   
    let option = document.createElement('option')


    option.text = `Valor ${num} adicionado`
    nuns.push(num)
    soma += num

    if(maior == 0){
        maior = num
        menor = num
    }else{
        if(num > maior){
            maior = num
        }
        if(num < menor){
            menor = num
        } 
    }



    resp.appendChild(option)
}

function calc() {
    let div = document.createElement('div')
    let resp = document.getElementById('resp')

    let media = soma / nuns.length

    div.innerHTML = `<p>Você adicionou ${nuns.length} Números</p>`
    resp.appendChild(div)
    div.innerHTML = `<p>a soma de todos os valores foi ${soma}</p>`
    resp.appendChild(div)
    div.innerHTML = `<p>o maior número informado foi ${maior}</p>`
    resp.appendChild(div)
    div.innerHTML = `<p>o menor número informado foi ${menor}</p>`
    resp.appendChild(div)
    div.innerHTML = `<p>A média dos valores informados foi ${media.toFixed(2).replace('.',',')}</p>`

    resp.appendChild(div)
    
}