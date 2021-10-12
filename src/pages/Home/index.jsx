import { useCounterContext } from '../../contexts/CounterContext/index.jsx';
import './Home.css';

export const Home = () => {
  const [state, dispatch] = useCounterContext();
  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
};

export default Home;
