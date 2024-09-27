import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import HistoryMenuComponent from "../../components/history/HistoryMenuComponent.jsx";
import {useState} from "react";

function HistoryMenu() {
    const [isHistoryMenu, setIsHistoryMenu] = useState(true);
    const historyMenuClick = (menu) => {
        setIsHistoryMenu(menu)
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
        <div>
            <header>
                <Header theme={'pinkNav'} />
            </header>
            <main className={'container-fluid p-0 m-0 pt-5 mt-5'}>
                <section>
                    <div className={'d-flex flex-column align-items-center justify-content-center'}>
                        <span className="historyTitle">이달의 맛 히스토리</span>
                        <span className="historyIntro">일년 열 두 달 새로운 맛, 배스킨라빈스 이달의 맛 히스토리</span>
                    </div>
                    <div className={'d-flex flex-column gap-0'}>
                        <div className={'historyMenuTab'}>
                            <div className={`historyMenu ${isHistoryMenu ? 'active' : ''}`} onClick={() => historyMenuClick(true)}>
                                연도별 보기
                            </div>
                            <div className={`historyMenu ${isHistoryMenu ? '' : 'active'}`} onClick={() => historyMenuClick(false)}>
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
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default HistoryMenu;