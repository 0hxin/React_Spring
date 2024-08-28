import FancyBorder2 from "./FancyBorder2.jsx";

function Dialog2(props) {
    return (
        <div>
            <FancyBorder2 color={'blue'}>
                <span>{props.title}</span>
                <span>{props.message}</span>
            </FancyBorder2>
        </div>
    );
}
export default Dialog2;