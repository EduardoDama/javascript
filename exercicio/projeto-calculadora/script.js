let resultado = document.getElementById('resultado')
let n1 = ""
let n2 = ""
let vezNum = 0
let carc = ""
let vezCar = 0
resultado.innerHTML = 0
function number(num){
    if(carc == "NOT"){
        alert('Primeiro selecione novamente o tipo de calculo')

    }else{
        if (vezNum == 0){
            n1 += num
            resultado.innerHTML = ""
            resultado.innerHTML = n1
        
            }else if(vezNum >= 1){
                n2 += num
                resultado.innerHTML += num
            }
    }
   
}

function especial(esp){
    carc = esp

    if(vezCar == 0){
    resultado.innerHTML += ` ${carc} `  
    vezCar += 1     
    }
    vezNum += 1 

    
    
}

function result(){
    if(carc == "+"){
        resp = Number(n1) + Number(n2)
    }
    else if(carc == "-"){
        resp = Number(n1) - Number(n2)
    }    
    else if(carc == "X"){
        resp = Number(n1) * Number(n2)
    }
    else if(carc == "/"){
        resp = Number(n1) / Number(n2)
    }
    
    resultado.innerHTML = ` ${resp} `
    carc = "NOT"
    n1 = resp
    n2 = ''
    vezCar = 0
}

function cancel(){
    n1 = ""
    n2 = ""
    vezNum = 0
    carc = ""
    vezCar = 0
    resultado.innerHTML = 0


}