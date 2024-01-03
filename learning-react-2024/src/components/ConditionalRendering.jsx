
const ConditionalRendering = ({ isLoggedIn }) => {
    return (
        <section>
            <h2>Conditional Rendering</h2>
            {isLoggedIn ? (
                <p>You are logged in!</p>
            ) : (
                <p>You are not logged in!</p>
            )}
        </section>
    );
};

export default ConditionalRendering;
