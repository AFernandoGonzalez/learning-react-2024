
const ListComponent = ({ items }) => {
    return (
        <section className="container">
            <h2>List Component</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default ListComponent;