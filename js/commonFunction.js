function itemNewNumber(isIncrease, itemId) {
    const itemNumberField = document.getElementById(itemId);
    const preItemNumber = parseInt(itemNumberField.value);

    let newItemNumber;
    if (isIncrease) {
        newItemNumber = preItemNumber + 1;
    } else {
        if (preItemNumber < 1) {
            return 0;
        } else {
            newItemNumber = preItemNumber - 1;
        }
    }
    itemNumberField.value = newItemNumber;

    return newItemNumber;
}

function getTextElementValueById(elementId) {
    const textElementField = document.getElementById(elementId);
    const elementValue = parseInt(textElementField.innerText);

    return elementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElementField = document.getElementById(elementId);

    textElementField.innerText = newValue;
}

function itemTotalPrice(itemTotalNumber, fieldId, unitPrice) {
    const itemPriseField = document.getElementById(fieldId);
    const totalPrice = parseInt(itemTotalNumber * unitPrice);
    itemPriseField.innerText = totalPrice;
}

function calculateSubTotal() {
    const phoneTotal = getTextElementValueById('phone_total_price');
    const caseTotal = getTextElementValueById('case_total_price');

    const subTotal = phoneTotal + caseTotal;
    setTextElementValueById('sub_total', subTotal)

    const tax = (subTotal * .1).toFixed(2);
    const taxVal = parseFloat(tax);
    setTextElementValueById('tax', taxVal)

    const totalPrice = subTotal + taxVal;
    setTextElementValueById('total', totalPrice);

}