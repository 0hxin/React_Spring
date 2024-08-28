function Card(props) {
    const {title, backgroundColor, children} = props;
    return (
        <div
            style={{backgroundColor : backgroundColor || "white",}}
            className={'d-grid gap-2 p-3 rounded-2 border shadow-sm'}>
            {title && <span className={'fs-5 fw-bold'}>{title}</span>}
            {children}
        </div>
    );
}
export default Card;