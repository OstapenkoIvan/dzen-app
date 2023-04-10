import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./routes/navigation";

import "./App.css";

function App() {
  return <RouterProvider router={mainRouter} />;
}

export default App;
