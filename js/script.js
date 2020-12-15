// alert("Hello world");

var userInfo = document.getElementById("userInfo").value;
var km = document.getElementById("km").value;
var age = document.getElementById("age").value;

fullPrice = km * 0.21;
juniorPrice = fullPrice - fullPrice * 20 / 100;
seniorPrice = fullPrice - fullPrice * 40 / 100;

if (age < 18) {
  price = juniorPrice;
  offer = "Minorenne"
} else if (age > 65) {
  price = seniorPrice;
  offer = "Over"

} else {
  price = fullPrice;
  offer = "Maggiorenne"

}

console.log(price.toFixed(2));
console.log(userInfo, km, age);


// write values
document.getElementById("show-name").innerHTML = userInfo;
document.getElementById("offer").innerHTML = offer;
document.getElementById("price").innerHTML = price.toFixed(2) + "€";
