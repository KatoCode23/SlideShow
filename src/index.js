import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

const slideShowImages = [
{image: require("./space1.jpg")},
{image: require("./space2.jpg")},
{image: require("./space3.jpg")},
{image: require("./space4.jpg")},
{image: require("./space5.jpg")},
];


//const image =
//    <img className="showImage" src={require("./space5.jpg")} alt=""/>

//console.log(slideShowImages);

const Slideshow = React.createClass({
  getInitialState: ()=> {
    return {
      images: slideShowImages,
      operator: "PLUS",
      pointer: 0
    }
  },
  render: ()=> {
    const pointed_image = this.state.images[this.state.pointer];
    console.log(pointed);
    const image_style = {backgroundImage: 'url(' + pointed_image.image + ')'}
    return (
        <div style={image_style}>

        </div>

    )
  },
  componentDidMount: function () {
    const self = this;
      this.interval = setInterval(()=>{
        const pointer = self.state.pointer,operator=this.state.operator;
        if(pointer === self.state.images.length-1){
          operator = "MINUS"
        }
        else if(pointer === 0){
          operator === "PLUS"
        }
          operator === "PLUS" ? pointer++:pointer--;
          return self.setState({pointer:pointer,operator:operator})
      },2000)
  },
  swithOperatot(operator) {
    this.setState({operator:operator})
  }
});












ReactDOM.render(
  <Slideshow />,
  document.getElementById('root')
);
