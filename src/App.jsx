import '../src/css/App.css';
import Header from './components/Header'
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App grid bgColor">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
