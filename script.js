

function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let petInfo = /pet_[a-zA-Z0-9]/; // expression ensures input starts with "pet_" by one or more alphanumeric characters
    let result;
if (petInfo.test(input)) { // depending on the result, displays valid syntax or invalid syntax. 
    result ="Valid Syntax";
} else { 
    result ="Invalid Syntax";
}
    document.getElementById('result').innerText = result;
}


