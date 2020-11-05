import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola desde React.
        </p>
        <a
          className="App-link"
          href="https://ifts11.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          IFTS 11
        </a>
      </header>
    </div>
  );
}

export default App;
