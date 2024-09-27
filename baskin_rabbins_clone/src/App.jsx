import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import BrStoryMenu from "./pages/brStory/BrStoryMenu.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/brStory'} element={<BrStoryMenu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
