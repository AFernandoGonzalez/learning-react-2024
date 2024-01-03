
const ButtonWithEvent = () => {
    const handleClick = () => {
        alert('You clicked me!');
    };

    return (
        <section className="container">
            <h2>Button With Event</h2>
            <button onClick={handleClick}>Click Event</button>
        </section>
    );
};

export default ButtonWithEvent;
