// PIZZA //
const pizzas = [
    
    {
    name: 'Cheese',
    description: 'description goes here',
    price: '10.99',
    imgSrc: 'images/pizza.png'
    },

    {
    name: 'Mushroom',
    description: 'description goes here',
    price: '3.45',
    imgSrc: 'images/mushroom_pizza.png'
    },

    {
    name: 'White',
    description: 'description goes here',
    price: '3.45',
    imgSrc: 'images/white_pizza.png'
    },

    {
    name: 'Tomato Mozzerella Basil',
    description: 'description goes here',
    price: '3.45',
    imgSrc: 'images/pizza.png'
    },

    {
    name: 'Margherita',
    description: 'description goes here',
    price: '3.45',
    imgSrc: 'images/margherita.png'
    },

    {
    name: 'Vegetable',
    description: 'description goes here',
    price: '3.45',
    imgSrc: 'images/vegetable.png'
    },

    {
    name: 'Margherita',
    description: 'description goes here',
    price: '3.45',
    imgSrc: 'images/pizza.png'
    },

    {
    name: 'Margherita',
    description: 'description goes here',
    price: '3.45',
    imgSrc: 'images/pizza.png'
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
    imgSrc: 'images/spaghetti.png'
    },
    
    {
    name: 'fusilli',
    price: '$10.99',
    imgSrc: 'images/fussili.png'
    },

    {
    name: 'Ziti',
    price: '$10.99',
    imgSrc: 'images/ziti.png'
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

 // SALAD //
const salads = [
    
    {
    name: 'Greek',
    description: 'description goes here',
    price: '7.50',
    imgSrc: 'images/greek_salad.png'
    },

    {
    name: 'Harvest',
    description: 'description goes here',
    price: '6.25',
    imgSrc: 'images/harvest_salad.png'
    },

    {
    name: 'House',
    description: 'description goes here',
    price: '7.50',
    imgSrc: 'images/house_salad.png'
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





var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}