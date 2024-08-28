import Quiz01Header from "./Quiz01Header.jsx";
import Quiz01Card from "./Quiz01Card.jsx";

function Quiz01() {
    const card = [
        {img: "https://www.w3schools.com/w3css/img_5terre.jpg",
            title: "5 Terre",
            detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {img: "https://www.w3schools.com/w3css/img_monterosso.jpg",
            title: "Monterosso",
            detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {img: "https://www.w3schools.com/w3css/img_vernazza.jpg",
            title: "Vernazza",
            detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {img: "https://www.w3schools.com/w3css/img_manarola.jpg",
            title: "Manarola",
            detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {img: "https://www.w3schools.com/w3css/img_corniglia.jpg",
            title: "Corniglia",
            detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {img: "https://www.w3schools.com/w3css/img_riomaggiore.jpg",
            title: "Riomaggiore",
            detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    ]
    let cardList = card.map(i => (
        <Quiz01Card img={i.img} title={i.title} detail={i.detail}/>
    ));
    return (
        <div>
            <header>
                <Quiz01Header/>
            </header>
            <main className={'container quiz1Main'}>
                {cardList}
            </main>
        </div>
    );
}
export default Quiz01;