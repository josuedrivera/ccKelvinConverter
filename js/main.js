console.log("connected");

// this constant stores the kelvin value
const kelvin = 293;



// this stores celsius converted from kelvin
var celsius = kelvin - 273;

//codecademy way
// const celsius = kelvin - 273;


//this stores fahrenheit converted from celsius
//Math.floor() used to round number
var fahrenheit = Math.floor(celsius * (9 / 5) + 32);

//codecademy way
// let fahrenheit = celsius * (9 / 5) + 32;
// fahrenheit = Math.floor(fahrenheit);



//this stores newton converted from celsius
//Math.floor() used to round number
var newton = Math.floor(celsius * (33/100));

//codecademy way
// let newton = celsius * (33 / 100);
// newton = Math.floor(newton);



console.log('The temperature is' + ' ' + kelvin + ' ' + 'degrees Kelvin.');

console.log(`The temperature is ${celsius} degrees Celsius`);

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

console.log(`The temperature is ${newton} degrees Newton.`);