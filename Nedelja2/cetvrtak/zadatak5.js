var price = 600;
var radius2 = 32;

var priceFor1cmOfPizza = price/(Math.pow(radius2/2,2)*Math.PI);

console.log(`Cena 1cm2 pizze iznosi ${priceFor1cmOfPizza} dinara`);