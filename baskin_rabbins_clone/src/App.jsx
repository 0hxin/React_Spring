import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import BrStoryMenu from "./pages/brStory/BrStoryMenu.jsx";
import Event from "./pages/event/Event.jsx";
import BrMenu from "./pages/menu/BrMenu.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/brStory'} element={<BrStoryMenu />} />
          <Route path={'/Event'} element={<Event />} />
          <Route path={'/menu'} element={<BrMenu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
