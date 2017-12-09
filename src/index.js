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
     if(this.state.currentPic >= this.numberOfImages){
          document.getElementById('#next').style.display="none";
     }
      console.log('you clicked next...' + this.state.currentPic);
    }

   clickPrevious(){
     this.setState({
       currentPic: this.state.currentPic -1
     })
     if(this.state.currentPic <= 1){
          document.getElementById('#prev').style.display="none";
     }
      console.log('you clicked previous...' + this.state.currentPic);
  }

  render () {
    const pic = require(`${slideShowImages[this.state.currentPic]}`);

      return (
      <div className="slide-container">
          <button id="prev" onClick={this.clickPrevious}>Previous</button>
          <img src={pic} width="200" alt="Some Name" />
          <button id="next" onClick={this.clickNext}> Next</button>
      </div>
      );
    }
  }

ReactDOM.render(
  <Slideshow />,
  document.getElementById('root')
);
