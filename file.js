// The menu icon 
let menu = document.getElementById('menu');
// The menu slider 
let menuSlider = document.getElementById('menu-slide');
// The button that close the menu slide 
let closeButton = document.getElementById('close-button');
// the logo of the cart 
let cartIcon = document.getElementById('cart-icon');
// the contain of the cart
let cartInfo = document.getElementById('cart-info');
// The status of the cart info 
let cartInfoStatus = document.getElementById('cart-info-status');
// The plus button 
let plusButton = document.getElementById('plus');
// The menus button 
let moinButton = document.getElementById('moin');
// The span that contain the number of clicking
let spanNumber = document.getElementById('click-numer');
// The span that contain the number of the clicks in the cart
let spanNumberCart = document.getElementById('number-cart');
// The number of clicking
let clickNumber = spanNumber.textContent
// The number of clicking in the cart 
let clickNumberCart = spanNumberCart.textContent
// The new price
let newPrice = document.getElementById('new-price');
// The image 
let image = document.getElementById('image')

// display the menu slider
menu.onclick = function(e){
    menuSlider.classList.remove('display-none');
}
// Close the menu slider
closeButton.onclick = () => {
    menuSlider.classList.add('display-none');
}

// Show and hide the cart contain 
cartIcon.onclick = (e) => {
    cartInfo.classList.toggle('display-none');
}

// Add on time click
plusButton.onclick = () => {

    spanNumber.textContent = ++clickNumber; 

    spanNumberCart.textContent = ++clickNumberCart; 

    cartInfoStatus.innerHTML = `Fall limited Edition Sneakers 
    ${newPrice.textContent} x ${spanNumberCart.textContent} <span class="total-price">$${spanNumberCart.textContent * 125.00}</span>
    <button>Checkout</button>`
                                            

}

// Remove on time click
moinButton.onclick = () => {
    if (spanNumber.textContent == 0){
        moinButton.onclick.preventDefault();
    }else{
        spanNumber.textContent = --clickNumber;
        spanNumberCart.textContent = --clickNumberCart
        if (spanNumberCart.textContent == 0) {
            cartInfoStatus.textContent = 'Your Cart Is Empty'
        }else{
            cartInfoStatus.innerHTML = `Fall limited Edition Sneakers 
    ${newPrice.textContent} x ${spanNumberCart.textContent} <span class="total-price">$${spanNumberCart.textContent * 125.00}</span>
    <button>Checkout</button>`
        }
        
    }
}

if (spanNumberCart.textContent == 0) {
    cartInfoStatus.textContent = 'Your Cart Is Empty'
}

