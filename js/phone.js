



document.getElementById('btn_phone_plus').addEventListener('click', function () {
    const itemTotalNumber = itemNewNumber(true, 'phone_input');
    itemTotalPrice(itemTotalNumber, 'phone_total_price', 1219);

    calculateSubTotal();
})

document.getElementById('btn_phone_minus').addEventListener('click', function () {
    const itemTotalNumber = itemNewNumber(false, 'phone_input');
    itemTotalPrice(itemTotalNumber, 'phone_total_price', 1219);

    calculateSubTotal();
})