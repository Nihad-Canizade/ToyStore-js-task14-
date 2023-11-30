// 1
let header = document.getElementById('header');
let navbar = document.getElementById('navbar');
let nav = document.getElementById('nav');
let navbarLogop1 = document.getElementById('navbarLogop1');
let navbarList1 = document.getElementById('navbarList1');
let navbarList2 = document.getElementById('navbarList2');
let navbarList3 = document.getElementById('navbarList3');
let navbarList4 = document.getElementById('navbarList4');

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.display = "none";
    navbar.style.backgroundColor = "black";
    nav.style.paddingTop = "10px";
    nav.style.paddingBottom = "10px";
    navbarLogop1.style.color = "white";
    navbarList1.style.color = "white";
    navbarList2.style.color = "white";
    navbarList3.style.color = "white";
    navbarList4.style.color = "white";
    cartText.style.color = "white";
    cart.style.color = "white";
    navbar.style.transition = "1s";
  } else {
    header.style.display = "block";
    navbar.style.backgroundColor = "";
    nav.style.paddingTop = "";
    nav.style.paddingBottom = "";
    navbarLogop1.style.color = "";
    navbarList1.style.color = "";
    navbarList2.style.color = "";
    navbarList3.style.color = "";
    navbarList4.style.color = "";
    cartText.style.color = "";
    cart.style.color = "";
  }
}


// 2
let section2 = document.getElementById("section2");
let mouse = document.getElementById("mouse");
mouse.addEventListener("click", (e) => {
    e.preventDefault();
    section2.scrollIntoView({
        behavior: 'smooth',
    });
});


// 3
let navbarMenu = document.getElementById('navbarMenu');
let navbarMenuClick = document.getElementById('navbarMenuClick');

navbarMenu.addEventListener('click', () => {
    navbarMenuClick.style.display = "block";
});

navbarMenu.addEventListener('dblclick', () => {
    navbarMenuClick.style.display = "none";
});



// 5
let cartText = document.getElementById('cartText');
let cart = document.getElementById('cart');
let zero = document.getElementById('zero');
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

cartText.onclick = function () {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
}

cart.onclick = function () {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
}

zero.onclick = function () {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
