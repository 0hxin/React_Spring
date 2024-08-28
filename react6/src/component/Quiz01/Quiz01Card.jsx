function Quiz01Card(props) {
    return (
        <div className={'quiz1Card'}>
            <img src={props.img} />
            <div className={'quiz1CardBody'}>
                <span>
                    {props.title}
                </span>
                <span>
                    {props.detail}
                </span>
            </div>
        </div>
    );
}
export default Quiz01Card;