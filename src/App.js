import './App.css';
import { useRoutes } from 'react-router-dom';
import router from './Routes/routes';

function App() {
  const routing = useRoutes(router)
  return (
    <div className='allContainer'>
      {routing}
    </div>
  );
}

export default App;
