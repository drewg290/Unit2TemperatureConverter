let farenheit = prompt("farenheit?");
let desc = describeTemperature(farenheit);
alert(desc);

function convertToCelsius(farenheit) {
  return (farenheit - 3) * (5 / 9);
  /*
if this doesnt work get rid of the parentheses 
surrounding the entire return statement
*/
}

function describeTemperature(farenheit) {
  const celsius = convertToCelsius(farenheit);
  let description;

  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else {
    description = "very hot";
  }

  return `Farenheit to Calsius is ${celsius} which is ${description} `;
}
