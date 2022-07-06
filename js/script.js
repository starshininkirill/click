let count = 0
let clickWeight = 1;
let perSecond = 0;

let shopPositionOne = 20;
let shopPositionTwo = 100;
let shopPositionTree = 1000;
let shopPositionFour = 5000;
let shopPositionUnreal = 100000;
let shopPositionSix = 5000000;

let shopPositionSecondOne = 100;
let shopPositionSecondTwo = 250;
let shopPositionSecondTree = 50000;
let shopPositionSecondFour = 5000000;

let secretShopPositionOne = 1000;
let secretShopPositionTwo = 100000;
let secretShopPositionTree = 500000;
let secretShopPositionFour = 10000000;

let image = document.getElementById("click");

let infoPerSecond = document.getElementById('infoPerSecond')
let clickInfo = document.getElementById('clickinfo')

let countView = document.getElementById('count');
countView.innerHTML = count + "p";


function calculate() {
   count = count + clickWeight;
   countView.innerHTML = count + "р";
}




function shopBuyImageOne() {
   if (count >= secretShopPositionOne) {
      image.style.cssText = "background: url(test.jpg) no-repeat center;";
      count = count - secretShopPositionOne;
      countView.innerHTML = count + "р";
   }
}
function shopBuyImageTwo() {
   if (count >= secretShopPositionTwo) {
      image.style.cssText = "background: url(ico-2.jpg) no-repeat center;";
      count = count - secretShopPositionTwo;
      countView.innerHTML = count + "р";
   }
}
function shopBuyImageTree() {
   if (count >= secretShopPositionTree) {
      image.style.cssText = "background: url(ico-3.jpg) no-repeat center;";
      count = count - secretShopPositionTree;
      countView.innerHTML = count + "р";
   }
}
function shopBuyImageFour() {
   if (count >= secretShopPositionFour) {
      image.style.cssText = "background: url(ico-4.jpg) no-repeat center;";
      count = count - secretShopPositionFour;
      countView.innerHTML = count + "р";
   }
}


function shopBuyOne() {
   if (count >= shopPositionOne) {
      clickWeight = clickWeight + 1;
      count = count - shopPositionOne;
      shopPositionOne = shopPositionOne + 10;
      document.getElementById("shop__position-1").innerHTML = "+1 за клик(" + shopPositionOne + "р)"
      console.log(shopPositionOne)
      countView.innerHTML = count + "р";
      clickInfo.innerHTML = "+" + clickWeight + " за клик";
   }
}
function shopBuyTwo() {
   if (count >= shopPositionTwo) {
      clickWeight = clickWeight + 10;
      count = count - shopPositionTwo;
      shopPositionTwo = shopPositionTwo + 50;
      document.getElementById("shop__position-2").innerHTML = "+6 за клик(" + shopPositionTwo + "р)"
      countView.innerHTML = count + "р";
      clickInfo.innerHTML = "+" + clickWeight + " за клик";
   }
}
function shopBuyTree() {
   if (count >= shopPositionTree) {
      clickWeight = clickWeight + 15;
      count = count - shopPositionTree;
      shopPositionTree = shopPositionTree + 600;
      document.getElementById("shop__position-3").innerHTML = "+15 за клик(" + shopPositionTree + "р)"
      countView.innerHTML = count + "р";
      clickInfo.innerHTML = "+" + clickWeight + " за клик";
   }
}
function shopBuyFour() {
   if (count >= shopPositionFour) {
      clickWeight = clickWeight + 40;
      count = count - shopPositionFour;
      shopPositionFour = shopPositionFour + 1400;
      document.getElementById("shop__position-4").innerHTML = "+40 за клик(" + shopPositionFour + "р)"
      countView.innerHTML = count + "р";
      clickInfo.innerHTML = "+" + clickWeight + " за клик";
   }
}

function shopBuyUnreal() {
   if (count >= shopPositionUnreal) {
      clickWeight = clickWeight + 1000;
      count = count - shopPositionUnreal;
      shopPositionUnreal = shopPositionUnreal + 90000;
      document.getElementById("shop__position-5").innerHTML = "+1 000 за клик(" + shopPositionUnreal + "р)"
      countView.innerHTML = count + "р";
      clickInfo.innerHTML = "+" + clickWeight + " за клик";
   }
}

function shopBuySix() {
   if (count >= shopPositionSix) {
      clickWeight = clickWeight + 5000;
      count = count - shopPositionSix;
      shopPositionSix = shopPositionSix + 500000;
      document.getElementById("shop__position-6").innerHTML = "+5 000 за клик(" + shopPositionSix + "р)"
      countView.innerHTML = count + "р";
      clickInfo.innerHTML = "+" + clickWeight + " за клик";
   }
}


function startInterval(el) {
   if (el.id == "positionOne") {
      if (count >= shopPositionSecondOne) {
         count = count - shopPositionSecondOne;
         shopPositionSecondOne = shopPositionSecondOne + 20
         document.getElementById("positionOne").innerHTML = "+1 в секунду(" + shopPositionSecondOne + "p)"
         perSecond = perSecond + 1;
         setInterval(function () {
            count = count + perSecond;
            countView.innerHTML = count + "р";
            infoPerSecond.innerHTML = "+" + perSecond + " в секунду"
         }, 1000);
      } else {
   
      }
   } else if (el.id == "positionTwo") {
      if (count >= shopPositionSecondTwo) {
         count = count - shopPositionSecondTwo;
         perSecond = perSecond + 6;
         shopPositionSecondTwo = shopPositionSecondTwo + 60
         document.getElementById("positionTwo").innerHTML = "+6 в секунду(" + shopPositionSecondTwo + "p)"
         setInterval(function () {
            count = count + 6;
            countView.innerHTML = count + "р";
            infoPerSecond.innerHTML = "+" + perSecond + " в секунду"
         }, 1000);
      }
   } else if (el.id == "positionTree") {
      if (count >= shopPositionSecondTree) {
         count = count - shopPositionSecondTree;
         perSecond = perSecond + 100;
         shopPositionSecondTree = shopPositionSecondTree + 5000
         document.getElementById("positionTree").innerHTML = "+100 в секунду(" + shopPositionSecondTree + "p)"
         setInterval(function () {
            count = count + 100;
            countView.innerHTML = count + "р";
            infoPerSecond.innerHTML = "+" + perSecond + " в секунду"
         }, 1000);
      }
   } else if (el.id == "positionFour") {
      if (count >= shopPositionSecondFour) {
         count = count - shopPositionSecondFour;
         perSecond = perSecond + 1000;
         shopPositionSecondFour = shopPositionSecondFour + 500000
         document.getElementById("positionFour").innerHTML = "+1000 в секунду(" + shopPositionSecondFour + "p)"
         setInterval(function () {
            count = count + 1000;
            countView.innerHTML = count + "р";
            infoPerSecond.innerHTML = "+" + perSecond + " в секунду"
         }, 1000);
      }
   }
}
function plusInterval(perSecond) {
   count = count + 1;
   countView.innerHTML = count + "р";
   console.log(count)
}
