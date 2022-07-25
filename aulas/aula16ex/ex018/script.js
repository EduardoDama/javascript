function adicionar() {
    let num = Number(document.getElementById('num').value) 
    let resp = document.getElementById('mostra')   
    let option = document.createElement('option')

    let numbers = []

    option.text = `Valor ${num} adicionado`
    numbers.push(num)
    console.log(numbers.length)
    resp.appendChild(option)
}