import { useState } from "react";
import Taskbar from "./components/Taskbar";
import WeatherApp from "./components/WeatherApp";
import "./styles/App.css";
import StickyNote from "./components/StickyNote";
import NewPDF from "./components/NewPDF";
import Dropzone from "./components/Dropzone";

function App() {
  const [openedApps, setOpenedApps] = useState([]);
  const [pdf, setPdf] = useState();

  return (
    <div className="App">
      <StickyNote />
      <Dropzone onDrop={setPdf} />

      {/* PDF */}
      {pdf && <NewPDF pdf={pdf} />}

      {/* Sticky notes */}
      {openedApps.includes("weather") && <WeatherApp lat="-34" lon="151" />}

      {/* Taskbar */}
      <Taskbar openedApps={openedApps} setOpenedApps={setOpenedApps} />
    </div>
  );
}

export default App;
