let resultado = document.getElementById("resultado")
let teclado = document.getElementById('teclado')
let valorcalc = document.getElementById('valorcalc')
let nume = ""
let result
let operadores = ['+', '-', '*', '/'] 
let valores = ["", "", ""]

function digitado(dig){
    if (typeof dig == "number"){
        nume += dig 
        mostrar(nume)
    }
    if (operadores.includes(dig)){
        if (result != valores[0]){
           valores[0] = nume 
        }
        valores[1] = dig
        nume = ""
        valorcalc.innerText = `${valores[0]} ${valores[1]}`
    } 
    if (dig == "="){
        valores[2] = nume
        nume = ""
        calcular()
    }
}
function deletar(){
    nume = nume.slice(0, -1)
    if (result = valores[0]){
        valores[0] = ""
     }
    mostrar(nume)
}
function mostrar(mostrar){
    resultado.innerText = mostrar
}
function calcular(){
    num1 = parseFloat(valores[0])
    num2 = parseFloat(valores[2])
    switch (valores[1]){
        case '+':
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "/":
            result = num1 / num2
            break
        case "*":
            result = num1 * num2          
            break
    }
    result = result.toFixed(2)
    mostrar(result);
    valorcalc.innerHTML = ""
    valores[0] = result.toString()
    valores[1] = ""
    valores[2] = ""
}