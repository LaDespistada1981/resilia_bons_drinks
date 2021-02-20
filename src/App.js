import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Novo from './components/Novo';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <Menu />
      <Novo />
      <Footer />
    </div>
  );
}

export default App;
