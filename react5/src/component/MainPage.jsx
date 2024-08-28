import {useState} from "react";
import WarningBanner from "./WarningBanner.jsx";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    }
    return(
        <div>
            <WarningBanner warning={showWarning} />
            <button className={'btn btn-success opacity-25'}
                onClick={handleToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}
export default MainPage;