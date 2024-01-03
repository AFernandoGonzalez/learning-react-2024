import { Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const AppRouter = () => {
    return (
        <Routes>
            <Link to="/">Home</Link>
            {/* <Route path="/" element={Home} />
            <Route path="/about" element={About} /> */}
            
        </Routes>
    );
};

export default AppRouter;
