let value1= document.querySelector("#value-1")
let value2= document.querySelector("#value-2")

let plusBtn= document.querySelector("#button-1")
let minusBtn= document.querySelector("#button-2")
let divideBtn= document.querySelector("#button-3")
let multiplyBtn= document.querySelector("#button-4")

let showOutput= document.querySelector("#output")

plusBtn.addEventListener("click", addTheNumbers)
minusBtn.addEventListener("click", substractTheNumbers)
multiplyBtn.addEventListener("click", multiplyTheNumbers)
divideBtn.addEventListener("click",divideTheNumbers)

function addTheNumbers(){
    let sum= Number(value1.value) + Number(value2.value)
    
    showOutput.innerText= "The sum of 2 numbers is " + sum
}

function substractTheNumbers(){
    let substract= Number(value1.value) - Number(value2.value)
    
    showOutput.innerText= "The sum of 2 numbers is " + substract
}

function multiplyTheNumbers(){
    let multiply= Number(value1.value) * Number(value2.value)
    
    showOutput.innerText= "The sum of 2 numbers is " + multiply
}

function divideTheNumbers(){
    let divide= Number(value1.value) / Number(value2.value)
    
    showOutput.innerText= "The sum of 2 numbers is " + divide
}
