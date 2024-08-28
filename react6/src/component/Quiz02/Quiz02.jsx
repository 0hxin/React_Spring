import Quiz02Card from "./Quiz02Card.jsx";

function Quiz02() {
    const card = [
        {color:"Black", title:"Basic",
            storage:"10GB", emails:"10",
            domains: "10", support : "Endless", per : "10"},
        {color:"Green", title:"Pro",
            storage:"25GB", emails:"25",
            domains: "25", support : "Endless", per : "25"},
        {color:"Black", title:"Premium",
            storage:"50GB", emails:"50",
            domains: "50", support : "Endless", per : "50"}
    ]
    let cardList = card.map(i => (
        <div className={'col-sm'}>
            <Quiz02Card color={i.color} title={i.title} storage={i.storage} emails={i.emails} domains={i.domains} support={i.support} per={i.per}/>
        </div>
    ));
    return (
        <div className={'container-fluid p-3 d-grid gap-3'}>
            <header>
                <span className={'fs-2'}>
                    Responsive Pricing Tables
                </span>
            </header>
            <main>
                <div className={'row'}>
                    {cardList}
                </div>
            </main>
        </div>
    )
}
export default Quiz02;