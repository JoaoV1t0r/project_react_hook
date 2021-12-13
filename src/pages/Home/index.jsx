import { useEffect } from 'react';
import { Button } from '../../components/Button/index.jsx';
import { Heading } from '../../components/Heading/index.jsx';
import { useCounterContext } from '../../contexts/CounterContext/index.jsx';
import './Home.css';

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading />
      <Button onButtonClick={() => actions.increase()}>increase</Button>
      <Button onButtonClick={() => actions.decrease()}>decrease</Button>
      <Button onButtonClick={() => actions.reset()}>reset</Button>
      <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>setCounter 100</Button>
      <Button onButtonClick={() => actions.asyncIncrease()}>asyncIncrease</Button>
      <Button onButtonClick={() => actions.asyncError()}>asyncError</Button>
    </div>
  );
};

export default Home;
