import {useState} from "react";

function NameForm() {
    const [value, setValue] = useState('');

    let email = '';

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleChangeEmail = e => {
        email = e.target.value;
        console.log(email);
    }

    const handleSubmit = (event) => {
        console.log(`입력한 이름 ${value}, 입력한 이메일 ${email}`);
        event.preventDefault();
    }

    return (
        <div>
            <form className={'d-grid gap-2'} onSubmit={handleSubmit}>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>이름</label>
                    <div className={'col-sm-10'}>
                        <input type={'text'} value={value} onChange={handleChange} className={'form-control'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>Email</label>
                    <div className={'col-sm-10'}>
                        <input type={'text'} value={email} onChange={handleChangeEmail} className={'form-control'}/>
                    </div>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'submit'} className={'btn btn-success opacity-50'}>제출</button>
                </div>
            </form>
        </div>
    );
}

export default NameForm;