import './App.css'
import MyComponent from './components/MyComponent'
import Counter from './components/Counter'
import ButtonWithEvent from './components/ButtonWithEvent'
import ConditionalRendering from './components/ConditionalRendering'
import ListComponent from './components/ListComponent'
import ControlledForm from './components/ControlledForm'
import LifecycleExample from './components/LifecycleExample'
import { Routes, Route, Link } from 'react-router-dom';
import { ContextProvider } from './context/MyContext';
import ComponentWithContext from './ComponentWithContext'
import EffectExample from './components/EffectExample'

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const App = () => {
  const userLoggedIn = true;
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
  ];

  return (
    <div>
      <MyComponent />
      <Counter initialValue={0} />
      <ButtonWithEvent />
      <ConditionalRendering isLoggedIn={userLoggedIn} />
      <ListComponent items={data} />
      <ControlledForm />
      <LifecycleExample />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ContextProvider>
        <ComponentWithContext />
      </ContextProvider>
      <EffectExample />
    </div>
  )
}

export default App
