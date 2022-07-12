var hora = document.getElementById('horas')
var minuto = document.getElementById('minutos')
var segundos = document.getElementById('segundos')


const relogio = setInterval(function time() {
    var agora = new Date()
    var horaN = agora.getHours()
    var minutosN = agora.getMinutes()
    var secondsN = agora.getSeconds()
    
    if(horaN < 10){
        horaN = '0' + horaN
    }
    if(minutosN < 10){
        minutosN = '0' + minutosN
    }
    if(secondsN < 10){
        secondsN = '0' + secondsN
    }
    hora.innerHTML = horaN
    minuto.innerHTML = minutosN
    segundos.innerHTML = secondsN
})
