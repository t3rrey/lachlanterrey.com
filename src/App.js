import Taskbar from "./components/Taskbar";
import WeatherApp from "./components/WeatherApp";
import "./styles/App.css";
// import StickyNote from "./components/StickyNote";
// import NewPDF from "./components/NewPDF";

// import pdf from "./sample.pdf";

function App() {
  return (
    <div className="App">
      <WeatherApp lat="-34" lon="151" />
      <Taskbar />
    </div>
  );
}

export default App;
