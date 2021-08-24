import Taskbar from "./components/Taskbar";
import "./styles/App.css";
import background from "./assets/background.svg";

function App() {
  return (
    <div className="App">
      <img className="background" src={background} alt="" />
      <Taskbar />
    </div>
  );
}

export default App;
