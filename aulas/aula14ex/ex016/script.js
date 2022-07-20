
function contar() {

    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var resp = document.getElementById('resp')

    var iniN = Number(inicio.value)
    var fimN = Number(fim.value)
    var pasN = Number(passo.value)
    var resul = document.createElement('div')


    for (iniN; iniN <= fimN; iniN += pasN) {
        resul.append(iniN)
        resul.append(' -> ')
    }
    resul.lastChild.remove()
    resp.appendChild(resul) 
    c++
    
}