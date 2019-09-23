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
    name: 'Name',
    price: '$10.99',
    imgSrc: 'images/pasta/spaghetti.png'
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