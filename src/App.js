import "./App.css";
import Home from "./component/Home";
import Hello from "./component/Hello";
import Number from "./component/Number";
import BlueRed from "./component/BlueRed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hello" exact element={<Hello />} />
        <Route path="/4" exact element={<Number />} />
        <Route path="/blue/red" exact element={<BlueRed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
