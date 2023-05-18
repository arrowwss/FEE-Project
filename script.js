// home carousel
$(".home-carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

///Navbar
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  navbar.classlist.toggle("fixed", this.window.scrollY > 0);
});

// Nav Buttons
let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector(".searchbtn");
let cartBtn = document.querySelector(".cartbtn");
let darkBtn = document.querySelector(".darkbtn");

searchBtn.onclick = function () {
  // Toggles Active Class In Search Form On Click
  document.getElementById("search-form").classList.toggle("active");
  // Changes Icon on Click
  if (document.getElementById("search-form").classlist.contains("active")) {
    searchBtn.classList.remove("bx-search-alt-2");
    searchBtn.classList.add("bx-x");
  } 
  else {
    searchBtn.classlist.remove("bx-x");
    searchBtn.classlist.add("bx-search-alt-2");
  }
}


cartBtn.onclick = function (){
    // Toggles Active Class In Cart On Click
   document.getElementById("cart").classlist.toggle('active');
    // Changes Icon on Click
   if(document.getElementById("cart").classList.contains('active')){
        cartBtn. classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
   }
    else{
       cartBtn.classlist.remove("bx-x");
       cartBtn.classlist.add("bx-cart");
        }                 I
    }



darkBtn.onclick = function(){
    
// Toggles Dark Mode Class To Body On Click
document.body.classlist.toggle('dark-mode');
// Changes Icon on Click
if(document.body.classList.contains('dark-mode')){
darkBtn.classList.remove("bx-moon");
darkBtn.classlist.add("bx-sun");
}
else{
darkBtn.classList.remove("bx-sun");
darkBtn.classlist.add("bx-moon");
}
}
