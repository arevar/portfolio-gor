import React from "react";
import "./Home.css";

class Home extends React.Component {
  state = {
    timer: false,
  };

  componentDidMount() {
    this.setState({ timer: !this.state.timer });
  }

  //   componentWillUnmount() {
  //     clearTimeout(this.state.timer);
  //   }

  renderDiv() {
    if (!this.state.timer) {
      return <div className="main-image"></div>;
    } else {
      return <div className="main-image"></div>;
    }
  }
  render() {
    return (
      <div>
        {/* {this.renderDiv()} */}
        <div className="main-image"></div>
      </div>
    );
  }
}

export default Home;
