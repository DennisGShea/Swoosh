import "./App.css";
import SimpleMap from "../src/components/SimpleMap";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <button className="navigation-btn" href="/html/">
            Rider login
          </button>

          <button className="navigation-btn" href="/css/">
            Ride stats
          </button>
        </nav>
        <div className="container">
          <div className="container-element__round">Route ONE </div>
        </div>

        <section>
          <div class="grid-container">
            <div class="grid-item">Map = 1</div>
          </div>
        </section>

        <div
          style={{ backgroundColor: "green", height: "500px", width: "1000px" }}
        >
          <h2>Swoosh</h2>
          <button> display info per ride segment</button>
          <div class="box5">
            <SimpleMap />
          </div>
        </div>
      </header>
      <footer>
        <h3>footer area -- App.js</h3>
        <button> test </button>
      </footer>
    </div>
  );
}
export default App;
