import Taskbar from "./components/Taskbar";
import "./styles/App.css";
import StickyNote from "./components/StickyNote";

function App() {
  return (
    <div className="App">
      <Taskbar />
      <StickyNote />
    </div>
  );
}

export default App;
