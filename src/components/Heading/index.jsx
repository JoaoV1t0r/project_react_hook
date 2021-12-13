import { useCounterContext } from '../../contexts/CounterContext/index.jsx';

export const Heading = () => {
  const [state, actions] = useCounterContext();
  return <h1 style={{ fontSize: 60 }}>{state.counter}</h1>;
};
