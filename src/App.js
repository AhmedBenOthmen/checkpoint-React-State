import "./App.css";
import React, { Component } from "react";

// app transformed into a class based component
class App extends React.Component {
  constructor(props) {
    super(props);
    // state implemented
    this.state = {
      Person: {
        fullName: "Ahmed",
        bio: "Bio",
        imgSrc:
          "https://gomycodelearndev.blob.core.windows.net/profiles/40316cd2-5fd0-4c52-99d1-93bfec6fdae8-133378807967368262.jpg",
        profession: "Video Editor",
      },
      show: true,
      interval:0,
    };
  }
  // the set interval method to calculate the time interval
  componentDidMount() {
    this.intervalId = setInterval(()=>{this.setState({interval:this.state.interval + 1})},1000)
  }
  componentDidUpdate() {clearInterval (this.intervalId)}
 
  // function to toggle the show state
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        {/* button to toggle the show state */}
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <p>{this.state.Person.fullName}</p>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} />
            <p>Profession: {this.state.Person.profession}</p>
          </div>
        )}
        {/* showing the time interval */}
      <p>time since mount : {this.state.interval}</p>
      </div>
      
    )
  }
}

export default App;
