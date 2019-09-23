// PIZZA //
const pizzas = [
    
    {
    name: 'Cheese',
    description: 'Basic never tasted so delicious!',
    price: '$10.99',
    imgSrc: 'images/pizza/pizza.png'
    },

    {
    name: 'Mushroom',
    description: 'Mushrooms with Mozzarella & House Tomato Sauce',
    price: '$3.45',
    imgSrc: 'images/pizza/mushroom.png'
    },

    {
    name: 'White',
    description: 'Ricotta, Mozzarella & Basil',
    price: '$3.45',
    imgSrc: 'images/pizza/white.png'
    },

    {
    name: 'Buffalo',
    description: 'Breaded Eggplant, Blue Cheese, Buffalo Sauce & Garlic Crust with Mozzarella',
    price: '$3.45',
    imgSrc: 'images/pizza/buffalo.png'
    },

    {
    name: 'Margherita',
    description: 'Sliced Tomatoes, Fresh Mozzarella & Basil',
    price: '$3.45',
    imgSrc: 'images/pizza/margherita.png'
    },

    {
    name: 'Vegetable',
    description: 'Seasoned Tomatoes, Peppers & Onions with Mozzarella & House Tomato Sauce',
    price: '$3.45',
    imgSrc: 'images/pizza/vegetable.png'
    },

    {
    name: 'Taco',
    description: 'Tortilla Chips, Black Beans, Red Onion, Green Pepper & Spicy Mayo',
    price: '$3.45',
    imgSrc: 'images/pizza/taco_pizza.png'
    },

    {
    name: 'Broccoli',
    description: 'Broccoli with Pesto, Feta & Mozzarella',
    price: '$10.99',
    imgSrc: 'images/pizza/broccoli-pesto.png'
    },

    {
    name: 'Stuffed Crust',
    description: 'Veggie Ground Meat, Mushrooms & Onions in a stuffed crust with cheese',
    price: '$3.45',
    imgSrc: 'images/pizza/stuffed_crust.png'
    },

    ]

var items = $('#pizza'), pizza;
pizzas.forEach(makePizzaDiv)

function makePizzaDiv(pizza) {

    $('.pizza-category').append('<div class="item">'
    + '<img src="' +pizza.imgSrc +'">'
    + '<div class="item-name"> ' +pizza.name +' </div>'
    + '<div class="item-description"> ' +pizza.description +' </div>'
    + '<div class="item-price"> ' +pizza.price +' </div>'
    + '</div>')
    
}


// PASTA //
const pastas = [

    {
    name: 'Spaghetti',
    price: '$10.99',
    imgSrc: 'images/pasta/spaghetti.png'
    },
    
    {
    name: 'Fusilli',
    price: '$10.99',
    imgSrc: 'images/pasta/fussili.png'
    },

    {
    name: 'Ziti',
    price: '$10.99',
    imgSrc: 'images/pasta/ziti.png'
    },

    ]

var items = $('#pasta'), pasta;
pastas.forEach(makePastaDiv)

function makePastaDiv(pasta) {

    $('.pasta-category').append('<div class="item">'
    + '<img src="' +pasta.imgSrc +'">'
    + '<div class="item-name"> ' +pasta.name +' </div>'
    + '<div class="item-price"> ' +pasta.price +' </div>'
    + '</div>')
}



// SAUCE //
const sauces = [

    {
    name: 'Alfredo',
    imgSrc: 'images/sauce/alfredo.png'
    },

    {
    name: 'Rosa Rosa',
    imgSrc: 'images/sauce/rosa-rosa.png'
    },

    {
    name: 'Pesto',
    imgSrc: 'images/sauce/pesto.png'
    },

    ]

var items = $('#sauce'), sauce;
sauces.forEach(makeSauceDiv)

function makeSauceDiv(sauce) {

    $('.sauce-category').append('<div class="item">'
    + '<img src="' +sauce.imgSrc +'">'
    + '<div class="item-name"> ' +sauce.name +' </div>'
    + '</div>')
}


 // SALAD //
const salads = [
    
    {
    name: 'Greek',
    description: 'Romaine Lettuce, Tomato, Red Onion, Yellow Pepper, Black Olives & Fresh Mozzarella',
    price: '7.50',
    imgSrc: 'images/salad/greek_salad.png'
    },

    {
    name: 'Harvest',
    description: 'Baby Spinach, Apples, Walnuts & Feta Cheese with a Balsamic Vinagrette',
    price: '6.25',
    imgSrc: 'images/salad/harvest_salad.png'
    },

    {
    name: 'House',
    description: 'Cabbage, Beets, Cucumber & Shredded Carrots with a Sesame Ginger Dressing',
    price: '7.50',
    imgSrc: 'images/salad/house_salad.png'
    },
    
    ]

var items = $('#salad'), salad;
salads.forEach(makeSaladDiv)

function makeSaladDiv(salad) {

    $('.salad-category').append('<div class="item">'
    + '<img src="' +salad.imgSrc +'">'
    + '<div class="item-name"> ' +salad.name +' </div>'
    + '<div class="item-description"> ' +salad.description +' </div>'
    + '<div class="item-price"> ' +salad.price +' </div>'
    + '</div>')
    
}


var slideIndex = 1;

var myTimer;

var slideshowContainer;


window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

