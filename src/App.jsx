import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contato from "./pages/Contato/Contato";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contato">
            <Contato />
          </Route>
          {/* <Route exact to path="/sobre">
            <Sobre />
          </Route> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
