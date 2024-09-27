import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import HistoryMenuComponent from "../../components/brStory/HistoryMenuComponent.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import BetterComponent from "../../components/brStory/BetterComponent.jsx";

function BrStoryMenu() {
    const location = useLocation();
    const {menu} = location.state || {};  // state에서 menu 값 가져오기
    const [isMenu, setIsMenu] = useState(menu);
    useEffect(() => {
        setIsMenu(menu);
    }, [menu]);
    const brStoryMenuClick = (menu) => {
        setIsMenu(menu);
    }

    const brStory = {
        'better': [
            {title: 'Be Better', subTitle: '배라가 사회와 함께 하는 방법,\n가치 있는 같이'}
        ],
        'history': [
            {title: '이달의 맛 히스토리', subTitle: '일년 열 두 달 새로운 맛, 배스킨라빈스 이달의 맛 히스토리'}
        ]
    }

    const [isHistoryMenu, setIsHistoryMenu] = useState(true);
    const historyMenuClick = (menuClick) => {
        setIsHistoryMenu(menuClick)
    }

    const yearMenu = [
        "2024",
        "2023",
        "2022",
    ];

    const themeMenu = [
        "배라이즈백",
        "레전더리플레이버",
        "그레이맛어워드",
    ];
    return (
        <div className={'mt-5'}>
            <header>
                <Header theme={'pinkNav'}/>
            </header>
            <main className={'container-fluid px-0 py-5 m-0'}>
                <section>
                    <div className={'brStoryTap'}>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'history' ? 'active' : ''}`} onClick={() => brStoryMenuClick('history')}>
                            이달의 맛 히스토리
                        </span>
                            <span className={`brStoryMenu rounded-2 ${isMenu === 'better' ? 'active' : ''}`} onClick={() => brStoryMenuClick('better')}>
                            Be Better
                        </span>
                    </div>
                    {brStory[isMenu].map((item, index) => (
                        <div className={'d-flex flex-column align-items-center justify-content-center text-center'} key={index}>
                            <span className="brStoryTitle">{item.title}</span>
                            <span className="brStoryIntro"
                                  dangerouslySetInnerHTML={{__html: item.subTitle.replace(/\n/g, "<br />")}}/>
                        </div>
                    ))}
                    {isMenu === 'history' && (
                        <div className={'d-flex flex-column align-items-center justify-content-center'}>
                            <div className={'historyMenuTab'}>
                                <div className={`historyMenu ${isHistoryMenu ? 'active' : ''}`}
                                     onClick={() => historyMenuClick(true)}>
                                    연도별 보기
                                </div>
                                <div className={`historyMenu ${isHistoryMenu ? '' : 'active'}`}
                                     onClick={() => historyMenuClick(false)}>
                                    테마별 보기
                                </div>
                            </div>
                            <div className={'historyMenuSection'}>
                                <HistoryMenuComponent
                                    type={isHistoryMenu ? 'year' : 'theme'}
                                    menu={isHistoryMenu ? yearMenu : themeMenu}
                                />
                            </div>
                        </div>
                    )}
                    {isMenu === 'better' && (
                        <div className={'d-flex flex-column align-content-around justify-content-center gap-5'}>
                            <BetterComponent />
                        </div>
                    )}
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default BrStoryMenu;