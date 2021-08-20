function changeImage(source, desc, price) {
    const image = document.getElementById('art');
    image.src = source;
    // Description
    const description = document.getElementById('desc');
    description.innerText = desc;
    // Art price
    const artPrice = document.getElementById('art-price');
    artPrice.innerText = price;
    // Total Price
    const totalCost = document.getElementById('total');
    totalCost.innerText = price;

}

function updateTotal(local) {
    // shipping
    const shippingCost = document.getElementById('shipping');
    const totalCost = document.getElementById('total');
    const artPriceText = document.getElementById('art-price');
    const totalPrice = parseFloat(artPriceText.innerText);

    // Shipping Cost Update
    if (local == true) {
        const shippingAmount = shippingCost.innerText = 10;
        const total = shippingAmount + totalPrice;
        totalCost.innerText = total;
    }
    else {
        const shippingAmount = shippingCost.innerText = 20;
        const total = shippingAmount + totalPrice;
        totalCost.innerText = total;
    }
}


// Description
const desc1 = 'Picture 1: Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!'
const desc2 = 'Picture 2: Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!'
const desc3 = 'Picture 3: Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!'


document.getElementById('first').addEventListener('click', function () {
    changeImage('images/1.jpg', desc1, 750);
})
document.getElementById('second').addEventListener('click', function () {
    changeImage('images/2.jpg', desc2, 650)
})
document.getElementById('third').addEventListener('click', function () {
    changeImage('images/3.jpg', desc3, 800)
})

// Shipping Button
const localShipping = document.getElementById('local').addEventListener('click', function () {
    updateTotal(true)
})
const globalShipping = document.getElementById('global').addEventListener('click', function () {
    updateTotal(false)
})

