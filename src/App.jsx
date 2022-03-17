import { useState } from "react";
import Taskbar from "./components/Taskbar/Taskbar";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import "./styles/App.css";
import StickyNote from "./components/StickyNotesApp/StickyNote.jsx";
import NewPDF from "./components/PDFViewer/NewPDF";
import Dropzone from "./components/PDFViewer/Dropzone";
import Window from "./components/Window";
import Calculator from "./components/Calculator";
function App() {
  const [openedApps, setOpenedApps] = useState([]);
  const [pdf, setPdf] = useState();

  return (
    <div className="App">
      <StickyNote />

      {openedApps.includes("calculator") && (
        <Window component={<Calculator />} height={670} width={420} />
      )}

      <Dropzone onDrop={setPdf} />

      {pdf && <NewPDF pdf={pdf} />}

      {openedApps.includes("weather") && (
        <Window component={<WeatherApp />} height={500} width={700} />
      )}
      {/* Taskbar */}
      <Taskbar openedApps={openedApps} setOpenedApps={setOpenedApps} />
    </div>
  );
}

export default App;
