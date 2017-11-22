import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

var slideShowImages = [
{image: "./space1.jpg"},
{image: "./space2.jpg"},
{image: "./space3.jpg"},
{image: "./space4.jpg"},
{image: "./space5.jpg"},
];

class Slideshow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      imageIsOpen: true,
      clickNext: '',
      clickPrevious: ''
    };

    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
}

   clickNext(){
       console.log('you clicked next...');
    }
   clickPrevious(){
      console.log('you clicked previous...');
    }

  render () {
      return (
      <div className="slide-container">
           <span onClick={this.clickNext} className="next">NEXT</span>
           <span onClick={this.clickPrevious} className="previous">PREVIOUS</span>
      </div>
      );
  }

}




ReactDOM.render(
  <Slideshow />,
  document.getElementById('root')
);
