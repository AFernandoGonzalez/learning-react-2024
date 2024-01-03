import { useState } from 'react';

const ControlledForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <section className="container">
            <h2>Controlled Form</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            <p>Input value: {inputValue}</p>
        </section>
    );
};

export default ControlledForm;
