import { useState, useEffect } from 'react';

const EffectExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        // Cleanup function 
        return () => {
            document.title = 'React App';
        };
    }, [count]);

    return (
        <section>
            <h2>Effect Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </section>
    );
};

export default EffectExample;
