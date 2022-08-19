




document.getElementById('btn_case_plus').addEventListener('click', function () {
    const itemTotalNumber = itemNewNumber(true, 'case_input');
    itemTotalPrice(itemTotalNumber, 'case_total_price', 59);

    calculateSubTotal();
})

document.getElementById('btn_case_minus').addEventListener('click', function () {
    const itemTotalNumber = itemNewNumber(false, 'case_input');
    itemTotalPrice(itemTotalNumber, 'case_total_price', 59);

    calculateSubTotal();
})