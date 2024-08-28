import {useState} from "react";

function RequestForm() {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    }
    const handleSubmit = e => {
        console.log(`입력한 요청사항 ${value}`);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className={'form-label'}>요청사항</label>
                <textarea className={'form-control'}
                          value={value} onChange={handleChange}
                          rows={5} placeholder={'요청사항을 입력해주세요.'} />
                <div className={'d-flex justify-content-end gap-3 mt-2'}>
                    <button type={'reset'} className={'btn btn-outline-success opacity-50'}>취소</button>
                    <button type={'submit'} className={'btn btn-success opacity-50'}>제출</button>
                </div>
            </form>
        </div>
    );
}

export default RequestForm;