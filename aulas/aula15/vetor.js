let num = [8,1,6,9,7]
/*
console.log(num[0]) 
console.log(num[1]) 
console.log(num[2]) 
console.log(num[3]) 
console.log(num[4]) */

/*
for (let index = 0; index < num.length; index++) {
    console.log(`Na posição ${index} temos o valor ${num[index]}`)   
}*/
 num.sort()
for(let pos in num){
    console.log(`Na posição ${pos} temos o valor ${num[pos]}`)

}