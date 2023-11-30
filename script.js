// 1
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.backgroundColor = "red";
//   } else {
//     document.getElementById("navbar").style.backgroundColor = "red";
//   }
// }


// Tabs, Responsive sidebar, Responsive Navbar





// 3
let navbarMenu = document.getElementById('navbarMenu');
let navbarMenuClick = document.getElementById('navbarMenuClick');

navbarMenu.addEventListener('click', () => {
    navbarMenuClick.style.display = "block";
});

navbarMenu.addEventListener('dblclick', () => {
    navbarMenuClick.style.display = "none";
});
