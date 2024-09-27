import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import HistoryMenu from "./pages/history/HistoryMenu.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/history/menu'} element={<HistoryMenu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
