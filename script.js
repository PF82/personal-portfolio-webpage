/* toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* active class*/

// get the container element
var btnContainer = document.getElementById("myLinks");

// get all buttons with class="btn" inside the container
var btns1 = btnContainer.getElementsByClassName("my-links");

// loop through the buttons and add the active class to the current/clicked button
for (var t = 0; t < btns1.length; t++) {
  btns1[t].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* about - tabs */

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

/* about - resume */

function openTab(th) {
  window.open(th.name, '_blank');
}

/* home - js typewritter */

var i = 0;
var txt = `Hello! I am`;
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    let text = txt.charAt(i);
    document.getElementById("h4").innerHTML += text;
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

var g = 0;
var txt1 = `Pedro Fernandes.`;
var speed1 = 150;

function typeWriter1() {
  if (g < txt1.length) {
    let text1 = txt1.charAt(g);
    document.getElementById("h2").innerHTML += text1;
    g++;
    setTimeout(typeWriter1, speed1);
  }
}

typeWriter1();

var l = 0;
var txt2 = `Front-End Developer`;
var speed2 = 150;

function typeWriter2() {
  if (l < txt2.length) {
    let text2 = txt2.charAt(l);
    document.getElementById("h1").innerHTML += text2;
    l++;
    setTimeout(typeWriter2, speed2);
  }
}

typeWriter2();

var k = 0;
var txt3 = `based in London.`;
var speed3 = 150;

function typeWriter3() {
  if (k < txt3.length) {
    let text3 = txt3.charAt(k);
    document.getElementById("h3").innerHTML += text3;
    k++;
    setTimeout(typeWriter3, speed3);
  }
}

typeWriter3();