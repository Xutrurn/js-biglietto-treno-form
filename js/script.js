// alert("Hello world");

var genera = document.getElementById("genera");
genera.addEventListener("click", function() {

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

  // random
  document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 9) + 1;
  document.getElementById("raceCode").innerHTML = Math.floor(Math.random() * 10000) + 90001;


  console.log(fullPrice.toFixed(2));
  console.log(userInfo, km, age);


  // write values
  document.getElementById("show-name").innerHTML = userInfo;
  document.getElementById("offer").innerHTML = offer;
  document.getElementById("fullPrice").innerHTML = fullPrice.toFixed(2) + "€";

  var biglietto = document.getElementById("biglietto");
  biglietto.style.visibility = "visible";

});

var annulla = document.getElementById("annulla");
annulla.addEventListener("click", function() {

  document.getElementById("userInfo").innerHTML = "";
  document.getElementById("km").innerHTML = "";
  document.getElementById("carriage").innerHTML = "";
  document.getElementById("raceCode").innerHTML = "";
  document.getElementById("show-name").innerHTML = "";
  document.getElementById("offer").innerHTML = "";
  document.getElementById("fullPrice").innerHTML = "";


  var biglietto = document.getElementById("biglietto");
  biglietto.style.visibility = "hidden";



});
