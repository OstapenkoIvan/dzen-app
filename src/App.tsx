import { BrowserRouter } from "react-router-dom";
// import { mainRouter } from "./routes/navigation";
import { MainRouter } from "./routes/navigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
