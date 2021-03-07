import "./App.css";
import SimpleMap from "../src/components/SimpleMap";

function App() {
  return (
 
    <div className="App">
      <header>
      <title>CoderGuides</title>
        <nav className="navigation">
          <button className="navigation-btn" href="/html/">
            Rider login
          </button>

          <button className="navigation-btn" href="/css/">
            Ride stats
          </button>

          <button className="navigation-btn" href="/css/">
            Ride History
          </button>
        </nav>
        <h2 style={{"text-align": "center", "color": "green"}}>Swoosh</h2>
        
        {/* <div className="container">
          <div className="container-element__round">Route ONE </div>
        </div> */}

        {/* <section>
          <div class="grid-container">
            <div class="grid-item">Map = 1</div>
          </div>
        </section> */}

        <div
          style={{ backgroundColor: "lightgrey", height: "100%", width: "100%" }}
        >
          <div className="box 5">
            <SimpleMap />
          </div>
        </div>
      </header>
      
      
    </div>
  );
}
export default App;
