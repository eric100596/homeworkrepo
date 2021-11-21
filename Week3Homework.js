const toppings = ["sausage", "pepperoni", "cheese", "olives"];

function greetCustomer () {
  for (let topping of toppings) {
    console.log(topping);
  };

  }
  greetCustomer(console.log("Welcome to E's Pizza! We have the following toppings: "));

function getPizzaOrder (size, crust,...toppings) {
  const myOrder = window.prompt("Pizza size: Enter x-large, large, or medium");
  const myOrder2 = window.prompt("Type of crust: Enter pan, hand tossed, or thin ");
  const myOrder3 = window.prompt("Toppings?: Enter sausage, pepperoni, cheese, and/or olives (one at a time followed by 'and'");
  console.log(`Here's your order: A ${myOrder} ${myOrder2} pizza, with ${myOrder3}. It's cooking!`);
}


function preparePizza(size, crust, toppings) {

  const myPizza = {
size: size,
crust: crust,
toppings: toppings,
}
return myPizza;
}




function servePizza () {

return `Order up! You had a ${preparePizza()}. Enjoy!`;
}

servePizza(preparePizza(getPizzaOrder(toppings)));
