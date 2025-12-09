import "./App.css";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        {/* <Home /> */}
      </ThemeProvider>
    </>
  );
}

export default App;