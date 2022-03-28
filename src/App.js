import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Contact from "./components/Contact.js";
import NewsDetail from "./pages/NewsDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Cover/navbar";
function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/:slug" component={NewsDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
