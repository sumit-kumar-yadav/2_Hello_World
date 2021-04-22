import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Sumit';
  const isLoggedIn = false;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {name}</p>
        <p>Today's date is: {new Date().toDateString()}</p>
        <p>Hello {isLoggedIn ? name : 'World'}</p>
        {!isLoggedIn && <p>Hello World</p>}
        {isLoggedIn && <p>Hello {name}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
