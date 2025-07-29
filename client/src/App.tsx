import {Route, Routes} from "react-router-dom";
import './App.css'

//Pages
import MainPage from "./pages/MainPage";
import ServerListPage from "./pages/ServerListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={<ServerListPage />} />
    </Routes>
  )
}

export default App
