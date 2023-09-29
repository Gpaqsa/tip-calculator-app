import "./App.css";
import ContentCard from "./components/ContentCard";
import logo from "./images/logo.svg";
function App() {
  return (
    <main className="app">
      <img src={logo} alt="logo" className="logo" />
      <ContentCard />
    </main>
  );
}

export default App;
