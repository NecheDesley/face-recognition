import { Component } from "react";
// import Clarifai from "clarifai";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Navigation from "./components/Navigation/Navigation";
// import Particles from "react-particles";



// const app = new Clarifai.App({
//   apiKey: "8fb5db767e704207ab8ee3ccc86638e7"
// });


class App extends Component {
  constructor() {
    super();
    this.state =  {
      input: "",
      imageUrl: ''
    };
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onSubmit = () => {
     this.setState({imageUrl: this.state.input});
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(  
        function (response) {
          console.log(response);
    //       //do something with response
        },
        function (err) {
    //       //there was an error
        }
      );
  }



  render() {
    return (
      <div className="App">
        
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
