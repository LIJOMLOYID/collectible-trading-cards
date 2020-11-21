import React from "react";
import "./App.css";

import Card from "./components/card";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Card name="Lijo M Loyid" job="Software Engineer" avatarId={52} />
          <Card name="James Smith" job="Pilot" avatarId={51} />
          <Card name="Jessica Jones" job="Nurse" avatarId={28} />
        </div>
      </div>
    );
  }
}

export default App;
