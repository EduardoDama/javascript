function contar() {
    var iniN = Number(document.getElementById('ini').value)
    var fimN = Number(document.getElementById('fim').value)
    var pasN = Number(document.getElementById('pas').value)
    var resp = document.getElementById('resp')
    var resul = document.createElement('div')

    if(pasN == 0){
        alert('[ERRO] passo 0, considerando passo 1')
        pasN = 1
    }

    if(iniN.length == 0 || fimN.length == 0){
        document.getElementById('msg').innerText = 'impossível contar!'

    }
    else{
        if(iniN <= fimN){
            for (iniN; iniN <= fimN; iniN += pasN) {
                resul.append(iniN + ' 👉 ')
            }  
        }
        else{
            for (iniN; iniN >= fimN; iniN -= pasN) {
                resul.append(iniN + ' 👉 ')
            }             
        }

        document.getElementById('msg').innerText = 'contando...'
        resp.lastElementChild.appendChild(resul).append('🏁') 
    }   
}
