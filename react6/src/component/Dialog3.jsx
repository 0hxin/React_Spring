import FancyBorder2 from "./FancyBorder2.jsx";

function Dialog3(props) {
    return (
        <div>
            <FancyBorder2 color={props.color}>
                <span className={'fs-5'}>
                    {props.title} <span className={'fs-6'}>({props.message})</span>
                </span>
                {props.children}
            </FancyBorder2>
        </div>
    );
}
export default Dialog3;