function setInputValue(isIncrease) {
    const inputField = document.getElementById('iphone-input');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    let inputResult;
    if(isIncrease == true) {
        inputResult = inputFieldValue + 1;
    }else{
        inputResult = inputFieldValue -1;
    }

    inputField.value = inputResult;
    return inputResult;
}


function getIphoneTotalPrice(iphoneQuantity) {
    const iphonePrice = document.getElementById('iphone-price');
    const newIphonePrice = iphoneQuantity * 1219;
    iphonePrice.innerText = newIphonePrice;
}



document.getElementById('iphone-plus-button').addEventListener('click', function() {
    const iphoneQuantity = setInputValue(true);        
    getIphoneTotalPrice(iphoneQuantity);
    getSubtotal();
    getTax(iphoneQuantity);
})


document.getElementById('iphone-minus-button').addEventListener('click', function() {
    const iphoneQuantity = setInputValue(false);
    getIphoneTotalPrice(iphoneQuantity);
    getSubtotal();
    getTax(iphoneQuantity);
})