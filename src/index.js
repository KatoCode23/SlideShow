import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

var slideShowImages = [
 "./space1.jpg",
 "./space2.jpg",
 "./space3.jpg",
 "./space4.jpg",
 "./space5.jpg"
];

class Slideshow extends React.Component {

  constructor(props){
    super(props);
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
    this.state = {
      currentPic: 0
    }
    this.numberOfImages = 4;
  };

   clickNext(){
     this.setState({
       currentPic: this.state.currentPic + 1
     })
      console.log('you clicked next...' + this.state.currentPic);
    }

   clickPrevious(){
     this.setState({
       currentPic: this.state.currentPic -1
     })
      console.log('you clicked previous...' + this.state.currentPic);
  }

  render () {
    let nextButton = null;
      if(this.state.currentPic >= 0 && this.state.currentPic < this.numberOfImages){
        nextButton = <button className="next" onClick={this.clickNext}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        console.log(nextButton);
      }

    let prevButton = null;
      if(this.state.currentPic > 0){
        prevButton = <button className="prev" onClick={this.clickPrevious}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>;
        console.log(prevButton);
      }

    const pic = require(`${slideShowImages[this.state.currentPic]}`);

      return (
      <div className="slide-container">
        <h1 className="title">Elin & Kalen</h1>
          {prevButton}
          <img className="slide-image" src={pic} alt="Some Name" />
          {nextButton}
      </div>
      );
    }
  }

ReactDOM.render(
  <Slideshow />,
  document.getElementById('root')
);
