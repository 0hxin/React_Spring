import {ThemeConsumer} from "../context/ThemeContext.jsx";
import {MemberConsumer} from "../context/MemberContext.jsx";
import Button3 from "./Button3.jsx";

function ThemeButton3() {
    return (
        <ThemeConsumer>
            {theme => (
                <MemberConsumer>
                    {member => (
                        <Button3 theme={theme} username={member} />
                    )}
                </MemberConsumer>
            )}
        </ThemeConsumer>
    );
}
export default ThemeButton3;