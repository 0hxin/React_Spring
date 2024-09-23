import {ThemeConsumer} from "../context/ThemeContext.jsx";
import Button2 from "./Button2.jsx";

function ThemeButton2() {
    return (
        <ThemeConsumer>
            {value => <Button2 theme={value} />}
        </ThemeConsumer>
    );
}
export default ThemeButton2;