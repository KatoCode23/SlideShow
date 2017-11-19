import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

const slideShowImages = [
{image: 'space1.jpg'},
{image: 'space2.jpg'},
{image: 'space3.jpg'},
{image: 'space4.jpg'},
{image: 'space5.jpg'},
];


const image =
    <img className="showImage" src="http://scene7.zumiez.com/is/image/zumiez/pdp_hero/ATM-Lone-Spirit-8.25%26quot%3B--Skateboard-Deck-_231553-front.jpg" alt=""/>

console.log(slideShowImages);













ReactDOM.render(
  image,
  document.getElementById('root')
);
