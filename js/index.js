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
    name: 'Alfredo',
    description: 'description goes here',
    price: '$10.99',
    imgSrc: 'images/pizza.png'
    },
    
    {
    name: 'Alfredo',
    description: 'description goes here',
    price: '$10.99',
    imgSrc: 'images/pizza.png'
    },

    {
    name: 'Alfredo',
    description: 'description goes here',
    price: '$10.99',
    imgSrc: 'images/pizza.png'
    },

    {
    name: 'Alfredo',
    description: 'description goes here',
    price: '$10.99',
    imgSrc: 'images/pizza.png'
    },

    ]

var items = $('#pasta'), pasta;
pastas.forEach(makePastaDiv)

function makePastaDiv(pasta) {

    $('.pasta-category').append('<div class="item">'
    + '<img src="' +pasta.imgSrc +'">'
    + '<div class="item-name"> ' +pasta.name +' </div>'
    + '<div class="item-description"> ' +pasta.description +' </div>'
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