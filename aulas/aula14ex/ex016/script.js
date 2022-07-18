
function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var p1 = document.getElementById('horas')

    p1.innerHTML = `<p>agora são ${hora} horas.</p>`

    var img = document.getElementById('imagem')
    var corpo = document.getElementsByTagName('body')[0]

    if(hora < 12){
        img.src = 'img/nascer-do-sol-do-amanhecer-no-campo-no-verão-83222758.jpg'
        corpo.style.backgroundColor = '#e2cd9f'

    }
    else if(hora < 18){
        img.src ='img/pôr-do-sol-laranja-no-lago-orsa-na-suécia-fim-de-um-belo-dia-em-dalarna-outono-238871424.jpg' 
        corpo.style.backgroundColor = '#b9846f'
    }
    else{
        img.src = 'img/noite02.jpg'
        corpo.style.backgroundColor = '#515154'
        
    }
}