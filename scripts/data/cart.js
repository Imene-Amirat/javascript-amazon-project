export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));

    if(!cart){
        cart = [{
            productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
            quantity: 1,
            deliveryOptionId: '1'
        }, {
            productId: '3ebe75dc-64d2-4137-8860-1f5a963e534b',
            quantity: 2,
            deliveryOptionId: '2'
        }];
    }
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
    let matchingItem;
    
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })

    if(matchingItem)
        matchingItem.quantity += quantity;
    else {
        cart.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionsId: '1'
        });
    }

    saveToStorage();
};

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}

export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
    let matchingcartItem;
    
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingcartItem = cartItem;
        }
    });
    
    matchingcartItem.quantity = newQuantity;

    saveToStorage();
}
