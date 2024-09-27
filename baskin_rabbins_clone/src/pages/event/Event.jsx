import Header from "../../layout/Header.jsx";
import Footer from "../../layout/Footer.jsx";

function Event() {
    return (
        <div>
            <header>
                <Header theme={'pinkNav'}/>
            </header>
            <main className={'container-fluid p-0 m-0'}>

            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Event;