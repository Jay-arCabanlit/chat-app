import logo from "./logo.svg";
import "./App.css";
import Login from "./views/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./views/chat/chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/chat" element={<Chat />}></Route>>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
