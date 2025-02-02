/*
// Exporting Modules
console.log("Exporting Modules");

const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};


//////////////////////////
// The Modules Pattern
const shoppingCart2 = (() => {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} order from suppliers`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart("apple", 4);
shoppingCart2.addToCart("pizza", 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shoppingCost);


//////////////////////////
// CommonJs Modules
*/

/////////////////////////////////////////////////
// A Brief Introduction To The Command Line

///////////////////////////
// Introduction To Npm 

///////////////////////////////////////////////////
// Review: Writing Clean and Modern JavaScript 