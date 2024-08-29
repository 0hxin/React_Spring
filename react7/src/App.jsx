import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./component/Main.jsx";
import Board from "./component/board/Board.jsx";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Main/>}/>
                  <Route path={'/board'} element={<Board/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
