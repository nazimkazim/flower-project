import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Flowers from "../src/pages/Flowers";
import SingleFlower from "../src/pages/SingleFlower";
import Error from "../src/pages/Error";
import NavBar from "../src/components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <div className="container is-fluid">
          <Route exact path="/" component={Home} />
          <Route exact path="/flowers" component={Flowers} />
          <Route exact path="/flowers/:slug" component={SingleFlower} />
          <Route exact component={Error} />
        </div>
      </Switch>
    </>
  );
}

export default App;
