import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

function Header(props) {
    const navigate = useNavigate();
    const mainPageMove = () => {
        navigate('/');
    };

    const historyPageMove = () => {
        navigate('/brStory', {state:{menu:'history'}})
    }
    const beBetterPageMove = () => {
        navigate('/brStory', {state:{menu:'better'}})
    }

    const allEventPageMove = () => {
        navigate('/event', {state:{menu:'All'}})
    }
    const proEventPageMove = () => {
        navigate('/event', {state:{menu:'Promotion'}})
    }
    const benEventPageMove = () => {
        navigate('/event', {state:{menu:'Benefit'}})
    }

    const monthFlavorPageMove = () => {
        navigate('/menu', {state:{menu:'monthFlavor'}})
    }
    const iceCreamPageMove = () => {
        navigate('/menu', {state:{menu:'iceCream'}})
    }
    const freePackPageMove = () => {
        navigate('/menu', {state:{menu:'prePack'}})
    }
    const iceCreamCakePageMove = () => {
        navigate('/menu', {state:{menu:'iceCreamCake'}})
    }
    const desertPageMove = () => {
        navigate('/menu', {state:{menu:'desert'}})
    }
    const drinkPageMove = () => {
        navigate('/menu', {state:{menu:'drink'}})
    }
    const coffeePageMove = () => {
        navigate('/menu', {state:{menu:'coffee'}})
    }

    const [isScrolled, setIsScrolled] = useState(false);
    // 스크롤 감지
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <nav className={`nav fixed-top ${isScrolled ? 'pinkNav' : props.theme}`}>
            <ul className={`navList`}>
                <li>
                    <img src={'../image/logo.png'} className={'navLogo'} onClick={mainPageMove}/>
                </li>
                <li className={'navMenu'}>
                    <a onClick={monthFlavorPageMove}>Menu</a>
                    <nav className={'subNav'}>
                        <ul className={'subNavList'}>
                            <li onClick={monthFlavorPageMove} className={'subNavMenu'}>이달의 맛</li>
                            <li onClick={iceCreamPageMove} className={'subNavMenu'}>아이스크림</li>
                            <li onClick={freePackPageMove} className={'subNavMenu'}>프리팩</li>
                            <li onClick={iceCreamCakePageMove} className={'subNavMenu'}>아이스크림 케이크</li>
                            <li onClick={desertPageMove} className={'subNavMenu'}>디저트</li>
                            <li onClick={drinkPageMove} className={'subNavMenu'}>음료</li>
                            <li onClick={coffeePageMove} className={'subNavMenu'}>커피</li>
                        </ul>
                    </nav>
                </li>
                <li className={'navMenu'}>
                    <a onClick={allEventPageMove}>BR Play</a>
                    <nav className={'subNav'}>
                        <div className={'subNav2Layout'}>
                            <div className={'subNav2List'}>
                                <a onClick={allEventPageMove} className={'subNav2Title'}>
                                    이벤트
                                </a>
                                <ul className={'subNavList'}>
                                    <li onClick={proEventPageMove} className={'subNavMenu'}>
                                        프로모션
                                    </li>
                                    <li onClick={benEventPageMove} className={'subNavMenu'}>제휴혜택</li>
                                </ul>
                            </div>
                            <div className={'subNav2List'}>
                                <span className={'subNav2Title'}>
                                    BR Play
                                </span>
                                <ul className={'subNavList'}>
                                    <li className={'subNavMenu'}>배라 광장</li>
                                    <li className={'subNavMenu'}>BR 레시피</li>
                                    <li className={'subNavMenu'}>마이플레이버리스트</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </li>
                <li className={'navMenu'}>
                    <a onClick={historyPageMove}>BR Story</a>
                    <nav className={'subNav'}>
                        <ul className={'subNavList'}>
                            <li className={'subNavMenu'}>브랜드 스토리</li>
                            <li onClick={historyPageMove} className={'subNavMenu'}>이달의 맛 스토리</li>
                            <li className={'subNavMenu'} onClick={beBetterPageMove}>Be Better</li>
                        </ul>
                    </nav>
                </li>
                <li className={'navMenu'}>
                    <a>Delivery/Store</a>
                    <nav className={'subNav'}>
                        <div className={'subNav2Layout'}>
                            <div className={'subNav2List'}>
                                <a className={'subNav2Title'}>
                                    Store
                                </a>
                                <ul className={'subNavList'}>
                                    <li className={'subNavMenu'}>
                                        매장 찾기
                                    </li>
                                    <li className={'subNavMenu'}>100flavor 플래그십스토어</li>
                                    <li className={'subNavMenu'}>워크샵 by 배스킨라빈스</li>
                                    <li className={'subNavMenu'}>점포개설문의</li>
                                </ul>
                            </div>
                            <div className={'subNav2List'}>
                                <span className={'subNav2Title'}>
                                    Delivery
                                </span>
                                <ul className={'subNavList'}>
                                    <li className={'subNavMenu'}>배달주문</li>
                                    <li className={'subNavMenu'}>단체주문</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
