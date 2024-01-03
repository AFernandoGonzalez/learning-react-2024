import { useState, useEffect } from 'react';

const LifecycleExample = () => {
    const [data, setData] = useState([]);
    const [randomId, setRandomId] = useState(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [randomId]);

    const fetchRandom = () => {
        const randomId = Math.floor(Math.random() * 100);
        setRandomId(randomId);
    };

    return (
        <section className="container">
            <h2>Lifecycle Example</h2>
            <p>{data? data.title : "Loading"}</p>
            <button onClick={() => fetchRandom({})}>Randomize Title</button>
        </section>
    );
};

export default LifecycleExample;
