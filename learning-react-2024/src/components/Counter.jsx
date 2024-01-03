import { useState } from 'react';

const Counter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);

    return (
        <section className='container'>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </section>
    );
};

export default Counter;
