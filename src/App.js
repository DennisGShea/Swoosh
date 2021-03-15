import "./App.css";
import SimpleMap from "../src/components/SimpleMap";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <title>CoderGuides</title>
        <nav className="navigation">
          {/* <button className="navigation-btn" href="/html/">
            Rider login
          </button> */}

          <button className="navigation-btn" href="/css/">
            Route Points Info
          </button>

          <button className="navigation-btn" href="/css/">
            Ride stats
          </button>

          <button className="navigation-btn" href="/css/">
            Ride History
          </button>
        </nav>
        <h2 style={{ "text-align": "center", color: "green" }}>Swoosh</h2>

        <div
          style={{
            backgroundColor: "lightgrey",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="box 5">
            <Form />
            <SimpleMap />
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
