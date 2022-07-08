import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RouterHead } from "./router/RouterHead";
import { store } from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <RouterHead />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
