import UserGreeting from "./UserGreeting.jsx";
import GusetGreeting from "./GusetGreeting.jsx";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return(<UserGreeting/>);
    }

    return(<GusetGreeting/>);
}
export default Greeting;