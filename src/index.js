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
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
    this.state =
    {imageIsOpen: false}
  };

   clickNext(){
     this.setState({imageIsOpen: true});
      console.log('you clicked next...');
    }

   clickPrevious(){
     this.setState({imageIsOpen: true});
      console.log('you clicked previous...');
    }

  render () {
    const imageIsOpen = this.state.imageIsOpen;
    let next = null;
    let previous = null;
      if(imageIsOpen) {
        next = <clickToNextImage onClick={this.clickNext} />;
      }
      if(imageIsOpen) {
        previous = <clickToPreviousImage onClick={this.clickPrevious} />;
      }
      return (
      <div className="slide-container">
           <ImageIsOpen imageIsOpen={imageIsOpen} />
      </div>
      );
    }


  function nextPhoto(props){
    console.log('click to the next image');
  }

  function previousPhoto(props){
    console.log('click to the previous image');
  }

  function ImageIsOpen(props) {
    const imageIsOpen = props.imageIsOpen;
     if(imageIsOpen) {
       console.log('next');
     }
     if(imageIsOpen) {
       console.log('previous');
     }
  }

  function nextButton(props) {
    return (
      <button className="next" onClick={props.onClick}>next</button>
    );
  }

  function previousButton(props) {
    return (
      <button className="previous" onClick={props.onClick}>previous</button>
    );
  }
}

ReactDOM.render(
  <Slideshow />,
  document.getElementById('root')
);
