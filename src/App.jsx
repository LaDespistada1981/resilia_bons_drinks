import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Drinks from "./pages/Drinks/Drinks";
import Sobre from "./pages/Sobre/Sobre";
import Home from "./pages/Home/Home";
import Time from "./pages/Time/Time";
import Contato from "./pages/Contato/Contato";
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
            <Time titulo="Nosso Time" />
          </Route>
          <Route exact to path="/sobre">
            <Sobre titulo="Sobre Nós" />
          </Route>
          <Route exact to path="/drinks/*">
            <Drinks titulo="Drinks" />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
