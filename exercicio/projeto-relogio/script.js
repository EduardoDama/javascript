var hora = document.getElementById('horas')
var minuto = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var agora = new Date()


var horaN = agora.getHours()
var minutosN = agora.getMinutes()
var secondsN = agora.getSeconds()

hora.innerHTML = horaN
if(minutosN < 10){
    minutosN = '0' + minutosN
}
if(secondsN < 10){
    secondsN = '0' + secondsN
}
minuto.innerHTML = minutosN
segundos.innerHTML = secondsN

location.reload()