import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import MonthFlavorComponent from "../../components/menu/MonthFlavorComponent.jsx";
import MenuComponent from "../../components/menu/MenuComponent.jsx";

function BrMenu() {
    const location = useLocation();
    const {menu} = location.state || {};
    const [isMenu, setIsMenu] = useState(menu);
    useEffect(() => {
        setIsMenu(menu)
    }, [menu]);
    const menuClick = (menu) => {
        setIsMenu(menu);
    }

    const menuTitle = {
        'monthFlavor': [
            {
                title: '9월 이달의 맛',
                subTitle: ''
            }
        ],
        'iceCream': [
            {
                title: 'Ice Cream',
                subTitle: '한 입에 물면 달콤하게 사르르 녹는 아이스크림.\n당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을 거예요.'
            }
        ],
        'prePack': [
            {
                title: 'Prepack',
                subTitle: '한 입에 물면 달콤하게 사르르 녹는 아이스크림.\n당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을 거예요.'
            }
        ],
        'iceCreamCake': [
            {
                title: 'Ice Cream Cake',
                subTitle: '축하하고 싶은 날에도, 위로가 필요한 날에도, 그 모든 순간 함께 할 아이스크림 케이크.\n달콤한 아이스크림 케이크로 당신의 특별한 날을 더욱더 특별하게 만들어드릴게요.'
            }
        ],
        'desert': [
            {
                title: 'Dessert',
                subTitle: '아이스크림을 더욱 맛있고 특별하게 즐길 수 있는 배스킨라빈스의 아이스 디저트!\n쫀득한 모찌부터 달콤한 마카롱까지 다양한 디저트를 만나보세요.'
            }
        ],
        'drink': [
            {
                title: 'Beverage',
                subTitle: '짜릿하게 시원한 블라스트부터 아이스크림을 듬뿍넣고 갈아만든 쉐이크까지!\n배스킨라빈스만의 특별함을 음료로 만나보세요.'
            }
        ],
        'coffee': [
            {
                title: 'Coffee',
                subTitle: '진한 카카오의 향과 풍부한 바디감의 배스킨라빈스 대표 커피 \'Café Bris\'\n일상에 모든 순간을 카페브리즈와 함께하세요.'
            }
        ],
    }

    return (
        <div>
            <header>
                <Header theme={'pinkNav'} />
            </header>
            <main className={'container-fluid px-0 py-5 m-0'}>
                <section>
                    <div className={'brStoryTap'}>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'monthFlavor' ? 'active' : ''}`}
                              onClick={() => menuClick('monthFlavor')}>
                            이달의 맛
                        </span>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'iceCream' ? 'active' : ''}`}
                              onClick={() => menuClick('iceCream')}>
                            아이스크림
                        </span>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'prePack' ? 'active' : ''}`}
                              onClick={() => menuClick('prePack')}>
                            프리팩
                        </span>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'iceCreamCake' ? 'active' : ''}`}
                              onClick={() => menuClick('iceCreamCake')}>
                            아이스크림케이크
                        </span>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'desert' ? 'active' : ''}`}
                              onClick={() => menuClick('desert')}>
                            디저트
                        </span>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'drink' ? 'active' : ''}`}
                              onClick={() => menuClick('drink')}>
                            음료
                        </span>
                        <span className={`brStoryMenu rounded-2 ${isMenu === 'coffee' ? 'active' : ''}`}
                              onClick={() => menuClick('coffee')}>
                            커피
                        </span>
                    </div>
                    {menuTitle[isMenu].map((item, index) => (
                        <div className={'d-flex flex-column align-items-center justify-content-center text-center'}
                             key={index}>
                            <span className={'brStoryTitle'}>{item.title}</span>
                            <span className={'brStoryIntro fw-bold'}
                                  dangerouslySetInnerHTML={{__html: item.subTitle.replace(/\n/g, "<br />")}}/>
                        </div>
                    ))}
                    {isMenu === 'monthFlavor' && (
                        <MonthFlavorComponent />
                    )}
                    {isMenu !== 'monthFlavor' && (
                        <MenuComponent menu={isMenu} />
                    )}
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default BrMenu;