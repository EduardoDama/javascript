var agora = new Date()
var ano = agora.getFullYear()


function verificar(){
    var resp = document.getElementById('resp')
    var nas = document.getElementById('nas')
    var n1 = Number(nas.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if(n1 > ano || nas.value.length == 0){
        alert('Número invalido [ERRO]')
    }

    else{
        var sexo = document.getElementsByName('sex')
        var idade = ano - n1
        resp.style.textAlign = 'center'

        if(sexo[0].checked){
            var gene = 'Homem'
            if(idade < 11){
                img.setAttribute ('src', 'imagens/criancaM.jpg')
            }
            else if(idade < 25){
                img.setAttribute ('src', 'imagens/jovemM.jpg')
            }
            else if(idade < 50){ 
                img.setAttribute ('src', 'imagens/adultoM.jpg')
            }
            else{
                img.setAttribute ('src', 'imagens/idosoM.jpg')
            }
        }
        else if(sexo[1].checked){
            var gene = 'Mulher'

            if(idade < 11){
                img.setAttribute ('src', 'imagens/criancaF.jpg')
            }
            else if(idade < 25){
                img.setAttribute ('src', 'imagens/jovemF.jpg')
            }
            else if(idade < 50){ 
                img.setAttribute ('src', 'imagens/adultaF.jpg')
            }
            else{
                img.setAttribute ('src', 'imagens/idosaF.jpg')
            }
        }
        resp.innerHTML = `Detectamos ${gene} com ${idade} anos`
        resp.appendChild(img)   
    }
}