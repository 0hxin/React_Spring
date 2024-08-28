import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./component/Main.jsx";
import Quiz01 from "./component/Quiz01/Quiz01.jsx";
import Quiz02 from "./component/Quiz02/Quiz02.jsx";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Main />} />
                  <Route path={'/quizOne'} element={<Quiz01 />}/>
                  <Route path={'/quizTwo'} element={<Quiz02 />}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
