import logo from './logo.svg';
import './App.css';
import Galeria from './components/Galeria';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Képgaléria</h1>
       <div className="foKep">
        < Galeria />
       </div>
       <div className="jatekTer">
        
       </div>
      </header>
    </div>
  );
}

export default App;
