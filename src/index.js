import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

class Image extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "Chris react 2"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.props.caption}</p>
        <div id="image" />
      </div>
    );
  }
}

ReactDOM.render(
  <Image caption="Wilderness are in Lake Tahoe, California" />,
  document.getElementById("react-container")
);
