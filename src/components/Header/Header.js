import Logo from "../Logo/Logo";
import './Header.css'

function Header() {
    return (
       <header>
            <Logo className="componentLogo" />
       </header>
        
    );
}

export default Header;

/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
</div>*/