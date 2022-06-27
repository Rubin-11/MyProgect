import { BrowserRouter } from "react-router-dom";
import { RouterHead } from "./router/RouterHead";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterHead />
      </BrowserRouter>
    </div>
  );
}

export default App;
