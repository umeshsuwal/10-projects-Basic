function detectCharacter(){

    const characterInput = document.getElementById("characterInput");
    const result = document.getElementById("result");

    const character = characterInput.value;
        if(isASCII(character)){
            result.innerText = 'The entered Character is ASCII Character';
        }else{
            result.innerText = 'The entered Character is Unicode Character';
        }

}

function isASCII(character){
    return character.charCodeAt(0)<=127;
}