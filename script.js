const btn = document.querySelector('button');
const pTag = document.querySelector('p');
const textArea = document.querySelector('textarea');
const tempInput = document.querySelector('#temp-input');
const lowerAlphabet = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
const upperAlphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

function conversion(iterator, outputArray, firstArray, secondArray) {
  if (/[a-zA-Z]/.test(iterator)) {
    const alphabet = firstArray.indexOf(iterator) > -1 ? firstArray : secondArray;
    let letterPosition = alphabet.indexOf(iterator) + 13;
    if (letterPosition > 25) {
      letterPosition %= 26;
    }
    outputArray.push(alphabet[letterPosition]);
  } else {
    outputArray.push(iterator);
  }
}

btn.addEventListener('click', () => {
  const outputArr = [];
  const inputLetters = textArea.value.split('');
  inputLetters.forEach(i => conversion(i, outputArr, upperAlphabet, lowerAlphabet));
  textArea.value = '';
  pTag.innerHTML = `${outputArr.join('')}<button id="copyBtn" onclick="copy()"><i class="fa-solid fa-copy"></i></button>`;
  tempInput.value = outputArr.join('');
});

function copy() {
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(tempInput.value);
  alert('Copied to clipboard');
}
