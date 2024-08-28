import {useState} from "react";

function Event1() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    // function handleClick() {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    function handleOn() {
        setIsToggleOn(true);
    }

    function handleOff() {
        setIsToggleOn(false);
    }

    const handleDelete = (id, event) => {
        alert(`id : ${id}, target : ${event.target}`);
    }
    return (
        <div className={'d-grid gap-2'}>
            <div className={'d-flex gap-3'}>
                <button type={'button'} className={'btn btn-success opacity-25'}
                        onClick={handleOn}>
                    켜짐
                </button>
                <button type={'button'} className={'btn btn-success opacity-25'}
                        onClick={handleOff}>
                    꺼짐
                </button>
            </div>
            <span>
                버튼의 상태 : <span className={'fw-bold'}>{isToggleOn ? '켜짐' : '꺼짐'}</span>
            </span>
            <div>
                <button type={'button'} className={'btn btn-success opacity-25'}
                        onClick={(event) => {
                            handleDelete(1, event);
                        }}>
                    매개변수가 있는 버튼 이벤트
                </button>
            </div>
        </div>
    );
}

export default Event1;