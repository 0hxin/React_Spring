import {useState} from "react";

function FruitSelect(){
    const [fruit, setFruit] = useState('');
    const [fruitTxt, setFruitTxt] = useState('');

    const handleChange = e => {
        setFruit(e.target.value);
    }
    const handleSubmit = e => {
        console.log(`선택한 과일 ${fruit}`);
        setFruitTxt(fruit);
        e.preventDefault();
    }

    return (
        <div className={'d-grid gap-2'}>
            <form onSubmit={handleSubmit}>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>과일</label>
                    <div className={'col-sm-10'}>
                        <select value={fruit} onChange={handleChange}
                                className={'form-select'}>
                            <option value={'apple'}>사과</option>
                            <option value={'banana'}>바나나</option>
                            <option value={'grape'}>포도</option>
                            <option value={'watermelon'}>수박</option>
                        </select>
                    </div>
                </div>
                <div className={'d-flex justify-content-end mt-2'}>
                    <button type={'submit'} className={'btn btn-success opacity-50'}>제출</button>
                </div>
            </form>
            <div>
                <span>선택한 과일 : <span className={'fw-bold'}>{fruitTxt}</span></span>
            </div>
        </div>
    );
}

export default FruitSelect;