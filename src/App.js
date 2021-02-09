import React from "react";
import "./App.css";

import Card from "./components/card";

class App extends React.Component {
  state = {
    avatarId: 28,
  };

  changeAvatar = () => {
    this.setState({
      avatarId: 49,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Card name="Lijo M Loyid" job="Software Engineer" avatarId={52} />
          <Card name="James Smith" job="Pilot" avatarId={51} />
          <Card
            name="Jessica Jones"
            job="Nurse"
            avatarId={this.state.avatarId}
          />
        </div>
        <div className="row">
          <div className="col-md-3">
            <a onClick={this.changeAvatar} className="changeAvatar" href="#">
              Change Avatar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
