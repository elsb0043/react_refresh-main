import "./App.css";

// Hvad er fejlen her og hvordan løses den?
// Manglede en prop til navnet; ({ name })

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <Welcome />
      <Greeting name='John' />
      <Counter />
      <UserProfile />
      <ItemList />
    </>
  );
};

export default App;
