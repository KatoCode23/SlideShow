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
      imagePath: '',
      clickNext: '',
      clickBack: ''
    };

    this.onChangeImagePath = this.onChangeImagePath.bind(this);
    this.onChangeClickNext = this.onChangeClickNext.bind(this);
    this.onChangeClickBack = this.onChangeClickBack.bind(this);
    }

    onChangeImagePath(){
      this.setState({imagePath: '<img className="showImage"> src="slideShowImages.image" alt="" />'});
    }

    onChangeClickNext(){
       slideShowImages.map((image)=>image++);
    }
    onChangeClickBack(){
      slideShowImages.map((image)=>image--);
    }

  render () {
      return (
      <div className="slide-container">
           <img className="showImage" src={require("./space1.jpg")} alt="" />
           <span className="next">NEXT</span>
           <span className="previous">PREVIOUS</span>
      </div>
      );
  }

}




ReactDOM.render(
  <Slideshow />,
  document.getElementById('root')
);
