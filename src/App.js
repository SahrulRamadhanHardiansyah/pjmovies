import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Horror from "./components/Horror"
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro></Intro>
        
      </div>
      {/* intro */}

      {/* trending */}
      <div className="trending">
        <Trending/>

      </div>
      {/* trendng */}
      {/* Horror */}
      <div className="horror">
        <Horror/>

      </div>
      {/* Horror */}
    </div>
  );
}

export default App;
