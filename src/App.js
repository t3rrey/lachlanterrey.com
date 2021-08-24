import Taskbar from "./components/Taskbar";
import "./styles/App.css";
import background from "./assets/background.svg";
import StickyNote from "./components/StickyNote/index";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Taskbar />
        <StickyNote />
      </div>
    </DndProvider>
  );
}

export default App;
