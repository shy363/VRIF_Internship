function removeSpecialCharacters(str) {
   
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
}


const inputStr = "He!llo@ Wo#rld$%^&*()";
const result = removeSpecialCharacters(inputStr);


console.log("Updated String :", result); 
