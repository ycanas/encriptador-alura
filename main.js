const encryptButton = document.getElementById('btn-encrypt');
const decryptButton = document.getElementById('btn-decrypt');
const copyButton = document.getElementById('btn-copy');
const input = document.getElementById('input');
const emptyArea = document.getElementById('empty');
const jsArea = document.getElementById('output-js')

let output = document.getElementById('text-js');

function decrypt(text){
    for(const [key, value] of keys){
        text = text.replaceAll(value, key);
    }

    return text;
}

function encrypt(text){
    let output = "";

    for(letter of text){
        if(keys.has(letter)){
            output += keys.get(letter);
        }else{
            output += letter;
        }
    }

    return output;
}

encryptButton.onclick = function(){
    if(input.value){
        emptyArea.style.display = "none";
        encryptText = encrypt(input.value.toLowerCase());
        jsArea.style.display = "";
        output.innerHTML = `${encryptText}`
        input.value = "";
    }else{
        output.innerHTML = "";
        jsArea.style.display = "none";
        emptyArea.style.display = "";
    }
}

decryptButton.onclick = function(){
    if(input.value){
        emptyArea.style.display = "none";
        decryptText = decrypt(input.value.toLowerCase());
        jsArea.style.display = "";
        output.innerHTML = `${decryptText}`;
        input.value = "";
    }else{
        output.innerHTML = "";
        jsArea.style.display = "none";
        emptyArea.style.display = "";
    }
}

copyButton.onclick = function(){
    copyText = output.innerText;
    navigator.clipboard.writeText(copyText);
}

const keys = new Map([
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]);

input.value = "";
jsArea.style.display = "none";
