var agora = new Date()
var horas = agora.getHours()

console.log(`Agora são exatamente ${horas} horas.`)

if(horas < 6){
    console.log('Boa madrugada!!')
}
else if(horas < 12){
    console.log(`Bom dia!!`)
}
else if(horas < 19){
    console.log(`Boa tarde!!`)
}
else{
    console.log('Boa noite!!')
}