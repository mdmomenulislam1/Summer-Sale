let total = 0;
let discount = 0;
let dam = 0;
const paymentBtn = document.getElementById('payment-btn');
const couponElement = document.getElementById('coupon-area').value;
const applyCoupon = document.getElementById('coupon-btn');
const productName = document.getElementById('item-name');
const reSetBtn = document.getElementById('reset-btn');



function clickPriceItem(tar) {
    const itemName = tar.children[1].children[1].innerText;
    const count = productName.childElementCount;
    dam = tar.children[1].children[2].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(dam);
    const totalPrice = document.getElementById('total-price').innerText = total.toFixed(2);
    const li = document.createElement('li');
    li.innerHTML = `${count + 1}. ${itemName} <span>${dam} $</span>`;
    productName.appendChild(li);
    if (total < '200') {
        applyCoupon.disabled = true;
    } else {
        applyCoupon.disabled = false;
    }
    applyCoupon.addEventListener('click', function () {
        const couponElement = document.getElementById('coupon-area').value;
        if (couponElement === 'SELL200') {
            const discountText = (20 * total) / 100;
            discount = document.getElementById('discount').innerText = discountText.toFixed(2);
            const netTotal = total - discount;
            console.log(netTotal);
            const final = document.getElementById('net-total').innerText = netTotal.toFixed(2);
        } else{
            const netTotal = total - discount;
            console.log(netTotal);
            const final = document.getElementById('net-total').innerText = netTotal.toFixed(2);
            return;
        }
    })
    if (total < '0' || total === '') {
        paymentBtn.disabled = true;
    } else {
        paymentBtn.disabled = false;
    }
    reSetBtn.addEventListener('click',function(){
        productName.innerText = '';
        document.getElementById('total-price').innerText = '';
        document.getElementById('discount').innerText = '';
        document.getElementById('net-total').innerText = '';
    })
}