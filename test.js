const num = document.getElementById('num')
const mais = document.getElementById('mais')
const menos = document.getElementById('menos')
const reset = document.getElementById('reset')
const slider = document.getElementById('quanti')
const valorRange = document.getElementById('valorRange')


var sum = 0


const soma = () => {
    num.textContent = ++sum
    if (sum >= slider.value) {
        travabt(mais)
    }
    if (sum >= 0){
        ativabt(menos)
    }
} 
const sub = () => {
    num.textContent = --sum
    if (sum <= 0) {
        travabt(menos)
    }
    if (sum <= slider.value){
        ativabt(mais)
    }
}
const ativabt = (a) => {
    a.classList.remove('btTravado')
    a.disabled = false
}
const travabt = (b) => {
    b.classList.add('btTravado')
    b.disabled = true
}

function girar() {
    document.getElementById('reset').classList.remove('girando')
    void document.getElementById('reset').offsetWidth;
    document.getElementById('reset').classList.add('girando')
    
}

const resetar = () => {
    num.textContent = 0
    sum = 0
    travabt(menos)
    ativabt(mais)
}

const quantidade = () => {
    valorRange.textContent = slider.value
}

if (parseInt(num.textContent) == 0){
    travabt(menos)
}
console.log(num.textContent)

mais.addEventListener('click', soma)
menos.addEventListener('click', sub)
reset.addEventListener('click', resetar)
