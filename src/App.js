
import { useEffect } from 'react';
import './App.css';
import useOnlineStatus from './data/hooks/useOnlineStatus';


function App() {
  const isOnline = useOnlineStatus()



  return (
    <div >
      {isOnline ? 'Você está online' : 'Você está off-line'}
    </div>
  );
}

export default App;
