import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contato from "./pages/Contato/Contato";
import Time from "./pages/Time/Time";
import Drinks from "./components/Drinks/Drinks";
import Sobre from "./pages/Sobre/Sobre";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contato">
            <Contato titulo="Contato" />
          </Route>
          <Route exact path="/time">
            <Time />
          </Route>
          <Route exact to path="/sobre">
            <Sobre titulo="Sobre Nós" />
          </Route>
          <Route exact to path="/drinks/*">
            <Drinks />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
