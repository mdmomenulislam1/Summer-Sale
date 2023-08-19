

let total = 0;
let discount = 0;

function clickPriceItem(tar) {
    const productName = document.getElementById('item-name');
    const itemName = tar.parentNode.childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    productName.appendChild(li);

    const damText = tar.parentNode.childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(damText);

    const totalPrice = document.getElementById('total-price').innerText = total.toFixed(2);

    const coupon = document.getElementById('coupon-btn');

    if (total < '200') {
        coupon.disabled = true;
    } else {
        coupon.disabled = false;
        const discountText = (20 * total) / 100;
        discount = document.getElementById('discount').innerText = discountText.toFixed(2);
    }


    const paymentBtn = document.getElementById('payment-btn');

    if (total < '0' || total === '') {
        paymentBtn.disabled = true;
    } else {
        paymentBtn.disabled = false;
        const netTotal = total - discount;
        const final = document.getElementById('net-total').innerText = netTotal.toFixed(2);
    }

    
}

function goHomeClick(){
    totalPrice = '';
    return;
}
