import { Route, Routes } from "react-router-dom";
import "./App.css";

//Pages
import MainPage from "./pages/MainPage";
import ServerListPage from "./pages/ServerListPage";
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={<ServerListPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
