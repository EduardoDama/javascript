let nuns = []
let div = document.createElement('div')

function adicionar() {
    let num = document.getElementById('num')
    let resp = document.getElementById('mostra')   
    let option = document.createElement('option')   

    const n1 = Number(num.value)
    num.innerText = ''

    if(verif(n1, nuns) == false){
        div.innerHTML = ''
        option.text = `Valor ${n1} adicionado`
        nuns.push(n1)
        resp.appendChild(option)
    }
    num.value = ''

    num.focus()
 
}

function verif(n, l) {
    if(n > 100 || l.indexOf(n) != -1 || n == 0){
    alert('Número INVALIDO, Já encontrado na lista!')
    }else{
        return false
    }
}

function calc() {
    let soma = 0
    let maior = 0
    let menor = 0

    if(nuns.length == 0){
        alert('Adicione números!')
    }else{
        for (let pos in nuns) {
        if(maior == 0){
            maior = nuns[pos]
            menor = nuns[pos]
        }else{
            if(nuns[pos] > maior){
                maior = nuns[pos]
            }
            if(nuns[pos] < menor){
                menor = nuns[pos]
            } 
        }
        soma += nuns[pos]
        }

        let media = soma / nuns.length
        mostrar(soma, media, menor, maior)
    }
}

function mostrar(s, med, men, mai) {
    let resp = document.getElementById('resp')
    div.innerHTML = ''
    div.innerHTML += `<p>Você adicionou ${nuns.length} Números</p>`
    div.innerHTML += `<p>o maior número informado foi ${mai}</p>`
    div.innerHTML += `<p>o menor número informado foi ${men}</p>`
    div.innerHTML += `<p>a soma de todos os valores foi ${s}</p>`
    div.innerHTML += `<p>A média dos valores informados foi ${med.toFixed(2).replace('.',',')}</p>`

    resp.appendChild(div)
}