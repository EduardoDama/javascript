var agora = new Date()
var dia = agora.getDay()

switch(dia){
    case 0:
        console.log('Hoje é domingo!')
        break
    case 1:
        console.log('Hoje é segunda!')
        break
    case 2:
        console.log('hoje é terça!')
        break
    case 3:
        console.log('hoje é quarta!')
        break
    case 4:
        console.log('hoje é quinta!')
        break
    case 5:
        console.log('Hoje é sexta!')
        break
    case 6:
        console.log('Hoje é sabado!')
        break
    default:
        console.log('Dia não encontrado!!')
        break
}