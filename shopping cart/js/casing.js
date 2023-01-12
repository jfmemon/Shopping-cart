function getCasingQuantity(isIncrease) {
    const casingQuantityInput = document.getElementById('casing-quantity-input');
    const casingQuantityInputString = casingQuantityInput.value;
    const casingQuantityInputInt = parseInt(casingQuantityInputString);
    let casingQuantityValue
    if(isIncrease == true) {
        casingQuantityValue = casingQuantityInputInt + 1;
    }else{
        casingQuantityValue = casingQuantityInputInt - 1;
    }
    casingQuantityInput.value = casingQuantityValue;
    return casingQuantityValue;
}


function getCasingPrice(casingQuantity) {
    const casingTotalPrice = casingQuantity * 59;
    const casingPrice = document.getElementById('casing-price');
    casingPrice.innerText = casingTotalPrice;
}


document.getElementById('casing-plus-button').addEventListener('click', function() {   // this is callback function
    const casingQuantity = getCasingQuantity(true);
    getCasingPrice(casingQuantity);
    getSubtotal();
    getTax(casingQuantity);
    getSubtotalTax();

})


document.getElementById('casing-minus-button').addEventListener('click', function() {   // this is callback function
    const casingQuantity = getCasingQuantity(false);
    getCasingPrice(casingQuantity);
    getSubtotal();
    getTax(casingQuantity);
    getSubtotalTax();
})