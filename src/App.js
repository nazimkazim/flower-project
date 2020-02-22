import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Flowers from "../src/pages/Flowers";
import SingleFlower from "../src/pages/SingleFlower";
import SingleBlog from "../src/pages/SingleBlog";
import Error from "../src/pages/Error";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Blogs from "./pages/Blogs";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/flowers" component={Flowers} />
        <Route exact path="/flowers/:slug" component={SingleFlower} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:slug" component={SingleBlog} />
        <Route exact component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
