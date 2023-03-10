// CHAPTER 5
//--------------- Q NO 1
// var num1 = 5;
// var num2 = 3;

// --------------add two numbers
// var sum = num1 + num2;

// -----------display the sum
// console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);

// document.write("The sum of " + num1 + " and " + num2 + " is " + sum)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// -------------Q NO 2
// var sub1 = 5;
// var sub2 = 3;

// -------------sub two numbers
// var sub = sub1 - sub2;

// --------------display the sub
// console.log('The sub of ' + sub1 + ' and ' + sub2 + ' is ' + sub);

// document.write('The sub of ' + '. ' + sub1 + ' and ' + sub2 + ' is ' + sub)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// -------------Q NO 2 b
// var mul1 = 5;
// var mul2 = 3;

// -------------mul two numbers
// var mul = mul1 * mul2;

// --------------display the sub
// console.log('The mul of ' + mul1 + ' and ' + mul2 + ' is ' + mul);

// document.write('The mul of ' + '. ' + mul1 + ' and ' + mul2 + ' is ' + mul)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// -------------Q NO 2 c
// var divi1 = 5;
// var divi2 = 3;

// -------------divi two numbers
// var divi = divi1 / divi2;

// --------------display the sub
// console.log('The divi of ' + divi1 + ' and ' + divi2 + ' is ' + divi);

// document.write('The divi of ' + '. ' + divi1 + ' and ' + divi2 + ' is ' + divi)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 3 a b
// var x = 5;
// var y = 5;

// -------------declare var
// var z = x + y;

//-------------- show in web 
// console.log("Value after variable declaration is:" + z)

// document.write("Value after variable declaration is:" + z)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 3 c
// var x = 5;


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 3 d
// var x = 5;

//-------------- show in web 
// console.log("Initialvalue:" + 5)

// document.write("Initialvalue: " + 5)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 3 e f
// var x = 5;
// var y = ++x;

//-------------- show in web 
// console.log("Value after increment is: " + y)

// document.write("Value after increment is: " + y)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 3 g h
// var x = 6;
// var y = 7;

// add 7
// var z = x + y;

//-------------- show in web 
// console.log("Value after addition is: " + z)

// document.write("Value after addition is: " + z)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 3 i j
// var x = 13;
// var y = --x;

//-------------- show in web 
// console.log("Value after decrement is: " + y)

// document.write("Value after decrement is: " + y)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 3 k 
// var x = 3;
// var y = 0;

// var z = x / y;

// //-------------- show in web 
// console.log("Value after decrement is: " + z)

// document.write("Value after decrement is: " + z)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//------------ Q NO 4 
// var x = 600;
// var y = 5;

// var z = x * y;

// //-------------- show in web 
// console.log("Total cost to buy 5 ticket to a movie is  " + z + 'PKR')

// document.write("Total cost to buy 5 ticket to a movie is  " + z + 'PKR')

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ----------Q NO 5
// take input from the user
var number = (9);

//creating a multiplication table
for (let i = 1; i <= 10; i++) {

    // multiply i with number
    var result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ------------Q NO 6
// function cToF(celsius) {
//     var cTemp = celsius;
//     var cToFahr = cTemp * 9 / 5 + 32;
//     var result = cTemp + ' \xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(result);
//     document.write(result)
// }

// function fToC(fahrenheit) {
//     var fTemp = fahrenheit;
//     var fToCel = (fTemp - 32) * 5 / 9;
//     var result = fTemp + ' \xB0F is ' + fToCel + '\xB0C.';
//     console.log(result);
//     document.write(result)
// }
// cToF(30);
// fToC(50);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ------------Q NO 7

// var price1 = 650;
// document.write('price of item 1 is ' + price1);
// var quantity1 = 3;
// document.write("<br>");
// document.write('Quantity of 1 item is ' + quantity1);
// // next
// document.write("<br>");

// var price2 = 100;
// document.write('price of item 2 is ' + price1);
// var quantity2 = 7;
// document.write("<br>");
// document.write('Quantity of 2 item is ' + quantity2);
// // next
// document.write("<br>");
// var ship = 100;
// document.write('Shipping charges is' + ship)
// document.write("<br>");
// document.write("<br>");
// var total = 2750;
// document.write("Total cost of your order is " + total)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ------------Q NO 8
// var total = 980;
// var obtained = 804;
// var prcentage = obtained * 100 / total;
// document.write("Total marks: " + total)
// document.write("<br>");
// document.write("Marks obtained: " + 804)
// document.write("<br>");
// let str = "\u0025"
// document.write(prcentage + str)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ------------Q NO 10
// var num = 10;
// var add = 5 + num;
// var multiply = 10 * add;
// var div = 2 / multiply;
// document.write('Add 5: ' + add)
// document.write("<br>");
// document.write('multiply by 10: ' + multiply)
// document.write("<br>");
// document.write('divided by 2: ' + div)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ------------Q NO 11
// var current = 2023;
// var birth = 2004;
// var age = current - birth;
// document.write("Current year: " + 2023);
// document.write("<br>");
// document.write("Birth Year:" + 2004);
// document.write("<br>");
// document.write("Your Age: " + age);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ------------Q NO 13
// var favsnaks = "Favourite Snack: Chocolate Chips";
// var age = "Current age: 15";
// var expire = "Estimated Maximum Age: 1 year";
// var amount = "Amount of snaks per day: 3";
// var discription = "You will need 150 Chocolate chip to last you until the ripe old age of 65"
// document.write(favsnaks);
// document.write("<br>");
// document.write(age);
// document.write("<br>");
// document.write(expire);
// document.write("<br>");
// document.write(amount);
// document.write("<br>");
// document.write(discription);