let alunos = []
let max = 5
let index = 0

let bo = ['nome', 'primeiro', 'segundo', 'terceiro', 'quarto', 'média']
let resp = document.getElementById('resp')
function calc() {
    let nome = document.getElementById('nome')
    let pri = document.getElementById('pri')
    let seg = document.getElementById('seg')
    let ter = document.getElementById('ter')
    let qua = document.getElementById('qua')



    no = nome.value
    priN = Number(pri.value)
    segN = Number(seg.value)
    terN = Number(ter.value)
    quaN = Number(qua.value)

    nome.value = ''
    nome.focus()

    let media = (priN + segN + terN + quaN) / 4

    console.log(pri.length)

    if(no.length == 0 || priN == 0 || segN == 0 || terN == 0 || quaN == 0){
        alert('Coloque valores na caixas!')
    }else{
        alunos.push(no)
        alunos.push(priN.toFixed(1).replace('.', ','))
        alunos.push(segN.toFixed(1).replace('.', ','))
        alunos.push(terN.toFixed(1).replace('.', ','))
        alunos.push(quaN.toFixed(1).replace('.', ','))
        alunos.push(media.toFixed(1).replace('.', ','))

        resp.innerHTML = '' 
    }

    pri.value = ''
    seg.value = ''
    ter.value = ''
    qua.value = ''
    
}

function fim() {
    if (alunos.length == 0) {
        alert('Adicione valores')
    } else {
        mostrar(index, max)
    }
    
    
}

function mostrar(i, m) {
    resp.innerHTML = ''
    let c = 0
    for (i; i <= m; i++) {
        resp.innerHTML += `<p>${bo[c]}: ${alunos[i]}</p>`  
        c+=1      
    }


}

function mais(){

    console.log(max, alunos.length)

    if (alunos.length == 0) {
        alert('Adicione um valor')
    }else{
        if(max+1 == alunos.length){
            alert('Máximo de alunos, volte para a anterior')
        }else{
            index += 6
            max += 6

            resp.innerHTML = ``

            mostrar(index, max)
            console.log(index, max)
        }
    }
}

function menos(){
    if (alunos.length == 0) {
        alert('Adicione um valor')
    }else{
        if(index == 0){
            alert('Limite da lista, vá para a próxima')
        }else{
            index -= 6
            max -= 6

            resp.innerHTML = ``

            mostrar(index, max)
            console.log(index, max)
        }
    }

}