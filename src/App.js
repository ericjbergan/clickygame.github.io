import React, { Component } from 'react';
import './App.css';
import Scores from './components/Scores/Scores'
import Images from './components/Images/Images'

let current = 0;
let best = 0;
let middleMessage = "Click an image to begin!"

class App extends Component {

  state = {
    images: [
      {
        imgURL: './images/img01.jpg', clicked: false
      },
      {
        imgURL: './images/img02.jpg', clicked: false
      },
      {
        imgURL: './images/img03.jpg', clicked: false
      },
      {
        imgURL: './images/img04.jpg', clicked: false
      },
      {
        imgURL: './images/img05.jpg', clicked: false
      },
      {
        imgURL: './images/img06.jpg', clicked: false
      },
      {
        imgURL: './images/img07.jpg', clicked: false
      },
      {
        imgURL: './images/img08.jpg', clicked: false
      },
      {
        imgURL: './images/img09.jpg', clicked: false
      },
      {
        imgURL: './images/img10.jpg', clicked: false
      },
      {
        imgURL: './images/img11.jpg', clicked: false
      },
      {
        imgURL: './images/img12.jpg', clicked: false
      },
    ]
  }

  whenClicked = (index) => {
    if (!this.state.images[index].clicked) {
      current++;
      middleMessage = "You guessed Correctly!";
      if (current>best) {
        best = current;
      }
      let array = this.state.images
      array[index].clicked = true;
      let tempArray = [];
      while (array.length > 0) {
        let rnd = Math.floor(Math.random() * array.length);
        tempArray.push(array[rnd]);
        array.splice(rnd, 1);
      }
      this.setState({ images: tempArray });
    } else {
      middleMessage = "You guessed incorrectly!"
      let resetArray = this.state.images;
      for(let i = 0; i<resetArray.length; i++) {
        resetArray[i].clicked = false;
      }
      current = 0;
      console.log(resetArray);
      this.setState({images: resetArray});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-md-4 left">
              <p>Clicky Game</p>
            </div>
            <div className="col-md-4 middle">
              <p id="start">{middleMessage}</p>
            </div>
            <div className="col-md-4 right">
              <div className="scores"><Scores current={current} best={best} /></div>
            </div>
          </div>
        </header>
        <div className="bigBanner">
          <p className="bannerTitle">Clicky Game!</p>
          <p className="instructions">Click on an image to earn points, but don't click on any one more than once.</p>
        </div>
        <br></br><br></br>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 images">
            {this.state.images.map((image, index) => {
              return <Images
                clicked={() => this.whenClicked(index)}
                pic={image.imgURL}
                key={index}
              />;
            })}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    )
  };
}

export default App;
