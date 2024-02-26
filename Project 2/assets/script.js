
function isPalindrome(str){

    const cleanStr = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
    console.log(cleanStr);
    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);
    return cleanStr === reversedStr;

}


function palindromechecker(){

    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');
    
    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a Palindrome`;
    }else{
        result.textContent = `"${inputText.value}" is not a Palindrome`;
    }

    result.classList.add('fadeIn');

    inputText.value = '';

}

document.getElementById('checkButton').addEventListener("click",palindromechecker);