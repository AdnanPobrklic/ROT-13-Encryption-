const btn = document.querySelector('button')
const pTag = document.querySelector('p')
const textArea = document.querySelector('textarea')
const tempInput = document.querySelector('#temp-input')
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
       conversion(i,outputArr,upperAlphabet,lowerAlphabet)
    })
    pTag.innerHTML =` ${outputArr.join('')}  <button id="copyBtn" onclick="copy()"><i class="fa-solid fa-copy"></i></button> `
    tempInput.value = outputArr.join('')
})

function conversion(iterator,outputArray,firstArray,secondArray) {
    if(firstArray.indexOf(iterator) > -1) {
        let letterPosition = firstArray.indexOf(iterator) + 13
        if(letterPosition > 25){
            letterPosition %= 26
        }
        outputArray.push((firstArray[letterPosition]))
    }else if(secondArray.indexOf(iterator) > -1){
        let letterPosition = secondArray.indexOf(iterator) + 13
        if(letterPosition > 25){
            letterPosition %= 26
        }
        outputArray.push((secondArray[letterPosition]))
    }else{
        outputArray.push(' ')
    }
}

function copy(){
    tempInput.select();
    tempInput.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(tempInput.value);
}