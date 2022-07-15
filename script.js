var likes = document.getElementsByClassName("like");
// console.log(likes) ;

for (let i = 0; i < likes.length; i++) {
  let jaime = likes[i];

  jaime.addEventListener("click", function () {
    if (jaime.style.color == "red") {
      jaime.style.color = "black";
    } else {
      jaime.style.color = "red";
    }
  });
}

var minuss = document.getElementsByClassName("minus-btn");
var priceIphone = parseInt(document.getElementById("p1").innerHTML);
var priceShoes = parseInt(document.getElementById("p2").innerHTML);
var priceWatch = parseInt(document.getElementById("p3").innerHTML);

for (let i = 0; i < minuss.length; i++) {
  let min = minuss[i];

  min.addEventListener("click", function () {
    if (min.nextElementSibling.value > 1) {
      let mult = min.nextElementSibling.value--;
      let sommeIphone = priceIphone * (mult - 1);
      let sommeShoes = priceShoes * (mult - 1);
      let sommeWatch = priceWatch * (mult - 1);
      if (i === 0)
        document.getElementsByClassName("price")[0].innerHTML = sommeIphone;
      if (i === 1)
        document.getElementsByClassName("price")[1].innerHTML = sommeShoes;
      if (i === 2)
        document.getElementsByClassName("price")[2].innerHTML = sommeWatch;
    }
    totalprice()
  });
}

var pluss = document.getElementsByClassName("plus-btn");
var total = 0;

for (let i = 0; i < pluss.length; i++) {
  let plus = pluss[i];

  plus.addEventListener("click", function () {
    let mult = plus.previousElementSibling.value++;
    let sommeIphone = priceIphone * (mult + 1);
    let sommeShoes = priceShoes * (mult + 1);
    let sommeWatch = priceWatch * (mult + 1);

    if (i === 0) {
      document.getElementsByClassName("price")[0].innerHTML = sommeIphone;
    }
    if (i === 1) {
      document.getElementsByClassName("price")[1].innerHTML = sommeShoes;
    }
    if (i === 2) {
      document.getElementsByClassName("price")[2].innerHTML = sommeWatch;
    }
    totalprice()
  });
}

let delets = document.querySelectorAll(".delete");

for (let i = 0; i < delets.length; i++) {
  delets[i].addEventListener("click", function () {
    delets[i].parentElement.remove();
    totalprice()
  });
}

var items = document.getElementsByClassName("Item");
var finalprice = document.getElementById("finalPrice");
var prix= document.getElementsByClassName('price')
function totalprice() {
    let somme = 0;

    for (let i = 0; i < prix.length; i++) {
        somme+=Number.parseInt(prix[i].innerText);
    }

    return (finalprice.value = somme);
}
totalprice()