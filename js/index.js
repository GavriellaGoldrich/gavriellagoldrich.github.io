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

    ]

var items = $('#pizza'), pizza;
pizzas.forEach(makePizzaDiv)

function makePizzaDiv(pizza) {

    $('.items').append('<div class="item">'
    + '<img src="' +pizza.imgSrc +'">'
    + '<div class="item-name"> ' +pizza.name +' </div>'
    + '<div class="item-description"> ' +pizza.description +' </div>'
    + '<div class="item-price"> ' +pizza.price +' </div>'
    + '</div>')
    
}


const pastas = [
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

    $('.pasta-items').append('<div> <img src="' +pasta.imgSrc +'"> </div>')
    $('.pasta-items').append('<div class="item-name"> ' +pasta.name +' </div>')
    $('.pasta-items').append('<div class="item-description"> ' +pasta.description +' </div>')
    $('.pasta-items').append('<div class="item-price"> ' +pasta.price +' </div>')
}