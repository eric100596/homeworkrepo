const pizzaToppings = ["sausage", "pepperoni", "cheese", "olives"];

function greetCustomer () {
  for (let topping of pizzaToppings) {
    console.log(topping);
  };

  }
  greetCustomer(console.log("Welcome to E's Pizza! We have the following toppings: "));

function getPizzaOrder (size, crust,...toppings) {
  const myOrder = window.prompt("Pizza size: Enter x-large, large, or medium ");
  const myOrder2 = window.prompt("Type of crust: Enter Pan, Hand Tossed, or Thin ");
  const myOrder3 = window.prompt("Toppings?: Enter sausage, pepperoni, cheese, and/or olives");
  console.log(`Here's your order: A ${myOrder} ${myOrder2} pizza, with ${myOrder3}`);
}

getPizzaOrder();


