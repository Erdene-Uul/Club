import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Contact from "./components/Contact.js";
import NewsDetail from "./pages/NewsDetail";
function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/:slug" component={NewsDetail} />
      </Switch>
    </div>
  );
}

export default App;
