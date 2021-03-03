// import logo from "./logo.svg";
import "./App.css";
import SimpleMap from "../src/components/SimpleMap";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <button className="navigation-btn" href="/html/">
            Login
          </button>

          <button className="navigation-btn" href="/css/">
            Map
          </button>

          {/* <button className='navigation-btn' href='/js/'>
            JavaScript
          </button>
          <button className='navigation-btn' href='/python/'>
            Python
          </button> */}
        </nav>
        <div className="container">
          <div className="container-element__round">Route ONE </div>
          {/* <div className='container-element__square'> element 2</div>
          <div className='container-element__square'> element 2</div> */}
        </div>

        <section>
          <div class="grid-container">
            <div class="grid-item">Map = 1</div>
            {/* <div class='grid-item'>2</div>
            <div class='grid-item'>3</div>
            <div class='grid-item'>4</div>
            <div class='grid-item'>5</div>
            <div class='grid-item'>6</div>
            <div class='grid-item'>7</div>
            <div class='grid-item'>8</div>
            <div class='grid-item'>9</div> */}
          </div>
        </section>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div style={{ backgroundColor: "lightcoral", height: "500px", }}   >

          
        <SimpleMap />
        
        </div>

      </header>
      <footer>
        <h3>this is my footer</h3>
        <button> test </button>
      </footer>
    </div>
  );
}
export default App;
