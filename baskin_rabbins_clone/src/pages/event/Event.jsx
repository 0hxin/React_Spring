import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import EventComponent from "../../components/event/EventComponent.jsx";


function Event() {
    const location = useLocation();
    const { menu } = location.state || {};

    const [isMenu, setIsMenu] = useState(menu);
    useEffect(() => {
        setIsMenu(menu);
    }, [menu])

    const menuClick = (key) => {
        setIsMenu(key);
    }

    return (
        <div>
            <header>
                <Header theme={'pinkNav'}/>
            </header>
            <main className={'container-fluid px-0 py-5 m-0'}>
                <section>
                    <div className={'brStoryTap'}>
                        <span className={'brStoryMenu rounded-2 active'}>
                            이벤트
                        </span>
                    </div>
                    <div className={'d-flex flex-column align-items-center justify-content-center text-center'}>
                        <span className="brStoryTitle">Event</span>
                        <span className="brStoryIntro">
                            배스킨라빈스와 함께 해피포인트앱/오프라인 매장에서 진행하는
                            <br/>다양한 이벤트를 확인해보세요
                        </span>
                    </div>
                    <div className={'d-flex flex-column align-items-center justify-content-center border-bottom container'}>
                        <div className={'historyMenuTab'}>
                            <div className={`historyMenu ${isMenu === 'All' ? 'active' : ''}`}
                                 onClick={() => menuClick('All')}>
                                전체
                            </div>
                            <div className={`historyMenu ${isMenu === 'Promotion' ? 'active' : ''}`}
                                 onClick={() => menuClick('Promotion')}>
                                프로모션
                            </div>
                            <div className={`historyMenu ${isMenu === 'Benefit' ? 'active' : ''}`}
                                 onClick={() => menuClick('Benefit')}>
                                제휴혜택
                            </div>
                        </div>
                    </div>
                    <div>
                        <EventComponent
                            menu={isMenu}
                        />
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Event;