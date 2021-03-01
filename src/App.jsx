import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
// import Contato from "./components/Contato/Contato";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Contato /> */}
      <Button style={{ backgroundColor: "purple" }}>Me clique!</Button>
      <Footer />
    </div>
  );
}

export default App;
