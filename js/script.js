// alert("Hello world");

var userInfo = document.getElementById("userInfo").value;
var km = document.getElementById("km").value;
var age = document.getElementById("age").value;
console.log(age);

var fullPrice = km * 0.21;
var offer = "Maggiorenne"

if (age == "juniorPrice") {
  fullPrice -= fullPrice * .2;
  offer = "Minorenne"
} else if (age == "seniorPrice") {
  fullPrice -= fullPrice * .4;
  offer = "Over"
}



console.log(fullPrice.toFixed(2));
console.log(userInfo, km, age);


// write values
document.getElementById("show-name").innerHTML = userInfo;
document.getElementById("offer").innerHTML = offer;
document.getElementById("fullPrice").innerHTML = fullPrice.toFixed(2) + "€";
