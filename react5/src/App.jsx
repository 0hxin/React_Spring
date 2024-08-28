import './App.css'
import Event1 from "./component/Event1.jsx";
import ConfirmButton from "./component/ConfirmButton.jsx";
import Greeting from "./component/Greeting.jsx";
import LoginControl from "./component/LoginControl.jsx";
import UserStatus from "./component/UserStatus.jsx";
import MainBox from "./component/MainBox.jsx";
import Counter from "./component/Counter.jsx";
import LoginControl2 from "./component/LoginControl2.jsx";
import MainPage from "./component/MainPage.jsx";
import LandingPage from "./component/LandingPage.jsx";
import AttendanceBook from "./component/AttendanceBook.jsx";
import NameForm from "./component/NameForm.jsx";
import RequestForm from "./component/RequestForm.jsx";
import FruitSelect from "./component/FruitSelect.jsx";
import Join from "./component/Join.jsx";

function App() {
  return (
      <div className={'container mx-auto d-grid gap-4 p-4 text-start'}>
          <div>
              <span className={'fs-3 bg-danger bg-opacity-10 rounded-3'}>1. 이벤트 사용하기</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <Event1/>
                  </li>
                  <li className={'list-group-item'}>
                      <ConfirmButton/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-warning bg-opacity-10 rounded-3'}>2. 조건부 렌더링</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <span>1. isLoggedIn <mark>false</mark> : </span>
                      <Greeting isLoggedIn={false}/>
                  </li>
                  <li className={'list-group-item'}>
                      <span>2. isLoggedIn <mark>true</mark> : </span>
                      <Greeting isLoggedIn={true}/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-danger bg-opacity-10 rounded-3'}>3. 엘리먼트 변수</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <LoginControl/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-warning bg-opacity-10 rounded-3'}>4. 인라인 조건문</span>
              <ul className={'mt-2 list-group'}>
                  <li className={'list-group-item'}>
                      <span>1. isLoggedIn <mark>false</mark></span>
                      <UserStatus isLoggedIn={false}/>
                      <MainBox unreadMessage={0}/>
                  </li>
                  <li className={'list-group-item'}>
                      <span>2. isLoggedIn <mark>true</mark></span>
                      <UserStatus isLoggedIn={true}/>
                      <MainBox unreadMessage={10}/>
                  </li>
                  <li className={'list-group-item'}>
                      <Counter count={2}/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-danger bg-opacity-10 rounded-3'}>5. 삼항연산자 조건문</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <LoginControl2/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-warning bg-opacity-10 rounded-3'}>6. 렌더링 막기</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <MainPage/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-danger bg-opacity-10 rounded-3'}>7. 로그인 툴바</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <LandingPage/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-warning bg-opacity-10 rounded-3'}>8. map 사용하기</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <AttendanceBook/>
                  </li>
              </ul>
          </div>
          <div>
              <span className={'fs-3 bg-danger bg-opacity-10 rounded-3'}>9. 제어 컴포넌트</span>
              <ul className={'list-group mt-2'}>
                  <li className={'list-group-item'}>
                      <div className={'mb-3'}>
                          <mark className={'fs-4'}>1. form</mark>
                      </div>
                      <NameForm/>
                  </li>
                  <li className={'list-group-item'}>
                      <div className={'mb-3'}>
                          <mark className={'fs-4'}>2. TextArea</mark>
                      </div>
                      <RequestForm/>
                  </li>
                  <li className={'list-group-item'}>
                      <div className={'mb-3'}>
                          <mark className={'fs-4'}>3. select</mark>
                      </div>
                      <FruitSelect/>
                  </li>
                  <li className={'list-group-item'}>
                      <div className={'mb-3'}>
                          <mark className={'fs-4'}>4. 회원가입 form</mark>
                      </div>
                      <Join/>
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default App
