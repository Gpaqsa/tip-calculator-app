import "./App.css";
import CalculationComponent from "./components/CalculationComponent";
import DisplayComponent from "./components/DisplayComponent";
import LogoHeader from "../src/assets/logo.svg";
function App() {
  return (
    <div className="App">
      <img src={LogoHeader} alt="logo" className="logo" />
      <main className="main-content">
        <CalculationComponent />
        <DisplayComponent />
      </main>
    </div>
  );
}

export default App;
