var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {item: Math.random(100)};
 console.log(item + ' has been added to your cart.');
 cart.push(obj);
 return cart;
}

function viewCart() {
  var str = 'In your cart, you have ';
  
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    
    if (cart.length === 1) {
      str += 
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
