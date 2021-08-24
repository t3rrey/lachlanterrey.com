import Taskbar from "./components/Taskbar";
import "./styles/App.css";
import background from "./assets/background.svg";
import StickyNote from "./components/StickyNote";

function App() {
  return (
    <div className="App">
      <img className="background" src={background} alt="" />
      <Taskbar />
      <StickyNote />
    </div>
  );
}

export default App;
