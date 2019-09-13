// PIZZA //
const pizzas = [
    
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


// // SALAD //
// const salad = [

//     {
//     name: 'Caesar',
//     description: 'description goes here',
//     price: '$10.99',
//     imgSrc: 'images/pizza.png'
//     },
    
//     {
//     name: 'House Salad',
//     description: 'description goes here',
//     price: '$10.99',
//     imgSrc: 'images/pizza.png'
//     },

//     {
//     name: 'Balsamic',
//     description: 'description goes here',
//     price: '$10.99',
//     imgSrc: 'images/pizza.png'
//     },

//     ]

// var items = $('#salad'), salad;
// salads.forEach(makeSaladDiv)

// function makeSaladDiv(salad) {

//     $('.salad-category').append('<div class="item">'
//     + '<img src="' +salad.imgSrc +'">'
//     + '<div class="item-name"> ' +salad.name +' </div>'
//     + '<div class="item-description"> ' +salad.description +' </div>'
//     + '<div class="item-price"> ' +salad.price +' </div>'
//     + '</div>')
// }