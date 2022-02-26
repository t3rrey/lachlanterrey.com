import { useState } from "react";
import Taskbar from "./components/Taskbar";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import "./styles/App.css";
import StickyNote from "./components/StickyNotesApp/StickyNote.jsx";
import NewPDF from "./components/PDFViewer/NewPDF";
import Dropzone from "./components/PDFViewer/Dropzone";

function App() {
  const [openedApps, setOpenedApps] = useState([]);
  const [pdf, setPdf] = useState();

  return (
    <div className="App">
      <StickyNote />
      <Dropzone onDrop={setPdf} />
      {/* PDF */} {pdf && <NewPDF pdf={pdf} />}
      {/* Sticky notes */} {openedApps.includes("weather") && <WeatherApp />}
      {/* Taskbar */}
      <Taskbar openedApps={openedApps} setOpenedApps={setOpenedApps} />
    </div>
  );
}

export default App;
