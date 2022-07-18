function contar() {
    var inicio = document.getElementById('ini').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('pas').value
    var resp = document.getElementById('resp')




    for (inicio; inicio <= fim; inicio += passo) {
        resp.innerHTML = inicio
    }
}