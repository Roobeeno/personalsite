// type coercion with dif object types
// === (!==) checks value AND type; == (!=) only checks value
// console.log is print
// define function as: function func(args) { 
// return thing; 
// }
// const is a constant variable; let assigns a variable that can be mutated
// objects store multiple values in key:value pairs; can access attributes as object.thing or object['thing']
// can have nested objects

// JSON: javascript object notation. That's whats inside of a JS object

// JS can interact with specfic tags in the HTML body stack
// CSS is an object you can access with JS! Use Queryselector
// In HTML, getClassName and other stuff

// Interactivity: events. addeventlistener is how you do interactivity
// Can define functions in same line as eventlistner! in the same tag 
// can modify multiple elements at the same time with for loops



//Change color of border of profile image!
const palette = ['#FFC5CB', '#8CADA7','#A5D0A8', '#B7990D', '#F2F4CB']

function randomColor(palette) {
    let index = Math.floor(Math.random() * palette.length)
    return palette[index]
}

const profileColor = document.getElementsByClassName("circle-image")[0]; // Get first element

if (profileColor) {
  console.log("profileColor found!");
  profileColor.addEventListener('mouseover', function() {
    profileColor.style.borderColor = randomColor(palette);
  });
} else {
  console.error("Element not found!");
}




// Define observer to trigger animation when elements appear in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInLeft");
      }
  });
}, { threshold: 0 });

// Select all .slant-image divs and observe them
const slants = document.querySelectorAll(".slant-image");
slants.forEach(slant => observer.observe(slant));

//doesn't work lol
slants[i].addEventListener("animationend", function () {
         slants[i].classList.remove("animate__slideInRight");
     }, { once: true });



