// get iphone total price
function getIphonePrice(elementId) {
    const iphonePriceValue = document.getElementById(elementId);
    const iphonePriceValueString = iphonePriceValue.innerText;
    const iphonePrice = parseInt(iphonePriceValueString);
    return iphonePrice;
}


// getting subtotal
function getSubtotal() {
    const iphonePriceLast = getIphonePrice('iphone-price');
    const casingPriceLast = getIphonePrice('casing-price');
    const subTotal = iphonePriceLast + casingPriceLast;
    const subTotalPrice = document.getElementById('sub-total');
    subTotalPrice.innerText = subTotal;
    

    // getting tax 
    const taxValue = (subTotal * 0.1).toFixed(1);
    const taxAmount = document.getElementById('tax');
    taxAmount.innerText = taxValue;


    // getting total value
    const subTotalInt = parseInt(subTotal);
    const taxValueFloat = parseFloat(taxValue);
    const total = subTotalInt + taxValueFloat;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = total;
}