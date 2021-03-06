import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import Theme from "./Theme";
import { ThemeStore } from "./contexts/ThemeStore";

function App() {

  return (
    <ThemeStore>
      <Theme>
        <Router>
          <Home />
        </Router>
      </Theme>
    </ThemeStore>
  );
}

export default App;
