import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

var slideShowImages = [
 "./1.JPG",
 "./2.JPG",
 "./3.JPG",
 "./4.JPG",
 "./5.JPG",
 "./6.JPG",
 "./7.JPG",
 "./8.JPG",
 "./9.JPG",
 "./10.JPG",
 "./11.JPG",
 "./12.JPG",
 "./13.JPG",
 "./14.JPG",
 "./15.JPG",
 "./16.JPG",
 "./17.JPG",
 "./18.JPG",
 "./19.JPG",
 "./20.JPG",
 "./21.JPG",
 "./22.JPG",
 "./23.JPG",
 "./24.JPG",
 "./25.JPG",
 "./26.JPG",
 "./27.JPG",
 "./28.JPG",
 "./29.JPG",
 "./30.JPG",
 "./31.JPG",
 "./32.JPG",
 "./33.JPG",
 "./34.JPG",
 "./35.JPG",
 "./36.JPG",
 "./37.JPG",
 "./38.JPG",
 "./39.JPG",
 "./40.JPG",
 "./41.JPG",
 "./42.JPG",
 "./43.JPG",
 "./44.JPG",
 "./45.JPG",
 "./46.JPG",
 "./47.JPG",
 "./48.JPG",
 "./49.JPG",
 "./50.JPG",
 "./51.JPG",
 "./52.JPG",
 "./53.JPG",
 "./54.JPG",
 "./55.JPG",
 "./56.JPG",
 "./57.JPG",
 "./58.JPG",
 "./59.JPG",
 "./60.JPG",
 "./61.JPG",
 "./62.JPG",
 "./63.JPG",
 "./64.JPG",
 "./65.JPG",
 "./66.JPG",
 "./67.JPG",
 "./68.JPG",
 "./69.JPG",
 "./70.JPG",
 "./71.JPG",
 "./72.JPG",
 "./73.JPG",
 "./74.JPG",
 "./75.JPG",
 "./76.JPG",
 "./77.JPG",
 "./78.JPG",
 "./79.JPG",
 "./80.JPG",
 "./81.JPG",
 "./82.JPG",
 "./83.JPG",
 "./84.JPG",
 "./85.JPG",
 "./86.JPG",
 "./87.JPG",
 "./88.JPG",
 "./89.JPG",
 "./90.JPG",
 "./91.JPG",
 "./92.JPG",
 "./93.JPG",
 "./94.JPG",
 "./95.JPG",
 "./96.JPG",
 "./97.JPG",
 "./98.JPG",
 "./99.JPG",
 "./100.JPG",
 "./101.JPG",
 "./102.JPG",
 "./103.JPG",
 "./104.JPG",
 "./105.JPG",
 "./106.JPG",
 "./107.JPG",
 "./108.JPG",
 "./109.JPG",
 "./110.JPG",
 "./111.JPG",
 "./112.JPG",
 "./113.JPG",
 "./114.JPG",
 "./115.JPG",
 "./116.JPG",
 "./117.JPG",
 "./118.JPG",
 "./119.JPG",
 "./120.JPG",
 "./121.JPG",
 "./122.JPG",
 "./123.JPG",
 "./124.JPG",
 "./125.JPG",
 "./126.JPG",
 "./127.JPG",
 "./128.JPG",
 "./129.JPG",
 "./130.JPG",
 "./131.JPG",
 "./132.JPG",
 "./133.JPG",
 "./134.JPG",
 "./135.JPG",
 "./136.JPG",
 "./137.JPG",
 "./138.JPG",
 "./139.JPG",
 "./140.JPG",
 "./141.JPG",
 "./142.JPG",
 "./143.JPG",
 "./144.JPG",
 "./145.JPG",
 "./146.JPG",
 "./147.JPG",
 "./148.JPG",
 "./149.JPG",
 "./150.JPG",
 "./151.JPG",
 "./152.JPG",
 "./153.JPG",
 "./154.JPG",
 "./155.JPG",
 "./156.JPG",
 "./157.JPG",
 "./158.JPG",
 "./159.JPG",
 "./160.JPG",
 "./161.JPG",
 "./162.JPG",
 "./163.JPG",
 "./164.JPG",
 "./165.JPG",
 "./166.JPG",
 "./167.JPG",
 "./168.JPG",
 "./169.JPG",
 "./170.JPG",
 "./171.JPG",
 "./172.JPG",
 "./173.JPG",
 "./174.JPG",
 "./175.JPG",
 "./176.JPG",
 "./177.JPG",
 "./178.JPG",
 "./179.JPG",
 "./180.JPG",
 "./181.JPG",
 "./182.JPG",
 "./183.JPG",
 "./184.JPG",
 "./185.JPG",
 "./186.JPG",
 "./187.JPG",
 "./188.JPG",
 "./189.JPG",
 "./190.JPG"
];

class Slideshow extends React.Component {

  constructor(props){
    super(props);
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
    this.state = {
      currentPic: 0
    }
  };

   clickNext(){
     this.setState({
       currentPic: this.state.currentPic + 1
     })
     console.log('you have clicked next... ' + this.state.currentPic);
   }

   clickPrevious(){
     this.setState({
       currentPic: this.state.currentPic -1
     })
      console.log('you clicked previous...' + this.state.currentPic);
   }

  render () {
    let nextButton = null;
      if(this.state.currentPic < slideShowImages.length -1){
        nextButton = <button className="next arrow" onClick={this.clickNext}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
        console.log(nextButton);
     }

    let prevButton = null;
      if(this.state.currentPic > 0){
        prevButton = <button className="prev arrow" onClick={this.clickPrevious}><i className="fa fa-angle-left" aria-hidden="true"></i></button>;
        console.log(prevButton);
     }

    const pic = require(`${slideShowImages[this.state.currentPic]}`);
    // <img className="slide-image" src={pic} alt="Some Name" />

      return (
    <div className="main-content">
      <div className="slide-container">
        <h1 className="title">eleen & kalen</h1>
          {prevButton}
          <div className="img-container"
               style={{ backgroundImage: "url(" + pic + ")" }}>
          </div>
          {nextButton}
      </div>
      <div className="credits-container">
        <p className="credit-text"><em>Special thanks to everyone for
        joining Eleen and I in the best day of our lives!<br/>
        Grandmothers and Grandchildren from Norway to California met in the middle,
        New York, to enjoy the sushine on
        a fall afternoon.<br/>Friends from far away places joined hands and exchanged
        stories, finally placing faces to names.<br/>
        The day is not the same without either of you in attendance. Awe,
        remembrance.<br/> You all brought life! You came with your light
        and lit the day and the night, with the fire of your hearts,
        Eleen and I could not wish for
        a better start. The sound of your voices to the play of the harp.<br/>
        We would be selfish to ask for better,
        how about that weather! Fall, and no need for
        a sweater.<br/>The dance floor burned all the way through the reception.
        Every moment a blessing.<br/>
        Words will just not do, so here are some pictures for you.<br/>
        <strong>Love,<br/>Eleen & Kalen</strong></em></p>
        <p className="credit-text"><strong>Hosts: </strong>Kara & Peter Georgiopoulos</p>
        <p className="credit-text"><strong>Parents of the Bride:</strong> Rita & Knut Halvorsen</p>
        <p className="credit-text"><strong>Parents of the Groom:</strong> Kimberlee & Kenneth Norton</p>
        <p className="credit-text"><strong>Officiator:</strong> Scott Marengo</p>
        <p className="credit-text"><strong>Poems:</strong> Bente Glukstad<br/>Keely Marengo</p>
        <p className="credit-text"><strong>Maid of Honor:</strong> Beata Kanter</p>
        <p className="credit-text"><strong>Bridesmaids:</strong> Ina Halvorsen<br/>Ida Asle<br/>Jay Miriam<br/>Keara Norton<br/>Keylee Norton</p>
        <p className="credit-text"><strong>Best Man:</strong> John Vasconcellos</p>
        <p className="credit-text"><strong>Groomesmen:</strong> Mitch Cristensen<br/>George Warren<br/>Eric Pringle<br/>Brian Linnert<br/>Aidan Marengo<br/>Nick DOrazio</p>
        <p className="credit-text"><strong>Ring Bearer:</strong> Constantine Georgiopoulos</p>
        <p className="credit-text"><strong>Flower Girls:</strong> Rylee Griffin & Kennedy Turner</p>
        <p className="credit-text"><strong>Wedding Cordinator:</strong> Wayne Scott Lukas</p>
        <p className="credit-text"><strong>Harp:</strong> Violetta Norrie<br/><strong>DJ:</strong> DJ Gavin<br/><strong>Song Performance:</strong> Rocko Walker</p>
        <p className="credit-text"><strong>Photography by:</strong> Pola Esther</p>
        <p className="credit-text"><strong>Hair:</strong><br/>Anthony Dickey<br/>Abiola Shabawale<br/>Jackie Challenger</p>
        <p className="credit-text"><strong>Speeches:</strong><br/>Peter Georgiopoulos<br/>Rita Halvorsen<br/>Kenneth Norton<br/>Beata Kanter<br/>John Vasconcellos<br/>Ina Halvorsen<br/>
        Eric Pringle<br/>Ida Asle<br/>Kevin Young<br/>Kalen Norton</p>
        <p className="credit-text"><strong>Special Thanks To:</strong><br/>Sandra Johnson<br/>Beth Brandino<br/>Dennis Danizette<br/>Marcia Danizette<br/>Douglas Gama<br/>Fatima Gama<br/>Katura Young<br/>Keely Marengo</p>
       </div>
    </div>
      );
    }
  }

ReactDOM.render(
  <Slideshow />,
  document.getElementById('root')
);
