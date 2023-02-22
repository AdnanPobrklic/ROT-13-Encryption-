const btn = document.querySelector('button')
const pTag = document.querySelector('p')
const textArea = document.querySelector('textarea')
const lowerAlphabet = [];
const upperAlphabet = [];
let inputLetters = [];

for(let i = 0; i < 26; i++){
    let letter = String.fromCharCode(65+i)
    upperAlphabet.push(letter)
}

for(let i = 0; i < 26; i++){
    let letter = String.fromCharCode(97+i)
    lowerAlphabet.push(letter)
}

btn.addEventListener('click', () => {
    let outputArr = []
    inputLetters = textArea.value
    textArea.value = "";
    inputLetters = inputLetters.split('')
    inputLetters.forEach(i => {
        if(upperAlphabet.indexOf(i) > -1) {
            let letterPosition = upperAlphabet.indexOf(i) + 13
            if(letterPosition > 25){
                letterPosition %= 26
            }
            outputArr.push((upperAlphabet[letterPosition]))
        }else if(lowerAlphabet.indexOf(i) > -1){
            let letterPosition = lowerAlphabet.indexOf(i) + 13
            if(letterPosition > 25){
                letterPosition %= 26
            }
            outputArr.push((lowerAlphabet[letterPosition]))
        }else{
            outputArr.push(' ')
        }
    })
    pTag.innerText = outputArr.join('')
})



