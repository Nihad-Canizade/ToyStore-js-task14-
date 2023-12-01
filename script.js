// 1
let header = document.getElementById('header');
let navbar = document.getElementById('navbar');
let nav = document.getElementById('nav');
let navbarLogop1 = document.getElementById('navbarLogop1');
let navbarList1 = document.getElementById('navbarList1');
let navbarList2 = document.getElementById('navbarList2');
let navbarList3 = document.getElementById('navbarList3');
let navbarList4 = document.getElementById('navbarList4');
let navbarList5 = document.getElementById('navbarList5');
let navbarList6 = document.getElementById('navbarList6');
let navbarList7 = document.getElementById('navbarList7');
let navbarList8 = document.getElementById('navbarList8');

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.display = "none";
        navbar.style.backgroundColor = "black";
        nav.style.paddingTop = "10px";
        nav.style.paddingBottom = "10px";
        navbarMenu.style.color = "white";
        navbarLogop1.style.color = "white";
        navbarList1.style.color = "white";
        navbarList2.style.color = "white";
        navbarList3.style.color = "white";
        navbarList4.style.color = "white";
        navbarList5.style.color = "white";
        navbarList6.style.color = "white";
        navbarList7.style.color = "white";
        navbarList8.style.color = "white";
        cartText.style.color = "white";
        cart.style.color = "white";
        navbar.style.transition = "1s";
    } else {
        header.style.display = "block";
        navbar.style.backgroundColor = "";
        nav.style.paddingTop = "";
        nav.style.paddingBottom = "";
        navbarMenu.style.color = "";
        navbarLogop1.style.color = "";
        navbarList1.style.color = "";
        navbarList2.style.color = "";
        navbarList3.style.color = "";
        navbarList4.style.color = "";
        navbarList5.style.color = "";
        navbarList6.style.color = "";
        navbarList7.style.color = "";
        navbarList8.style.color = "";
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
    if (navbarMenuClick.style.display === "none") {
        navbarMenuClick.style.display = "block";
    } else {
        navbarMenuClick.style.display = "none";
    }
});


// 4.1
const section3 = [
    { name: 'Teddy Bear', price: '$30.00 USD', image: 'Toys Images/Teddy Bear.png' },
    { name: 'Mege Plush Toy', price: '$38.00 USD', image: 'Toys Images/Mega Plush Toy.png' },
    { name: 'Cute Dog', price: '$24.00 USD', image: 'Toys Images/Cute Dog.png' },
    { name: 'Little Friend', price: '$27.00 USD', image: 'Toys Images/Little Friend.png' }
];


const boxs1 = document.getElementById('sec3Boxs');

section3.forEach(item => {

    const box = document.createElement('div');
    box.classList.add('sec3-box');

    box.innerHTML =
        `<div class="img">
        <img src="${item.image}" alt="Image-toys"  class="sec3-box-img"/>
      </div>
      <p class="sec3-box-p1">${item.name}</p>
      <p class="sec3-box-p2">${item.price}</p>`;

    boxs1.append(box);
});


// 4.2
const section4 = [
    { name: 'Happy Flower', price: '$38.00 uSD', image: 'Toys Images/Happy Flower.png' },
    { name: 'Lift Machine', price: '$24.00 USD', image: 'Toys Images/Lift Machine.png' },
    { name: 'Wooden Camera', price: '$32.00 USD', image: 'Toys Images/Wooden Camera.png' },
    { name: 'Little Rabbit', price: '$16.00 USD', image: 'Toys Images/Little Rabbit.png' }
];


const boxs2 = document.getElementById('sec4Boxs');

section4.forEach(item => {

    const box = document.createElement('div');
    box.classList.add('sec4-box');

    box.innerHTML =
        `<div class="img">
        <img src="${item.image}" alt="Image-toys"  class="sec4-box-img"/>
      </div>
      <p class="sec4-box-p1">${item.name}</p>
      <p class="sec4-box-p2">${item.price}</p>`;

    boxs2.append(box);
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


// ...
let inputEmail = document.getElementById('inputEmail');

function Focus() {
    inputEmail.style.border = "2px solid #A5C926";
}
