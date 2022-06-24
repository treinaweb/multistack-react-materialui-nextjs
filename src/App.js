import { useEffect } from 'react';
import useOnlineStatus from './data/hooks/useOnlineStatus';
import Button from '@mui/material/Button'


function App() {
    const isOnline = useOnlineStatus();

    useEffect(() => {
        if (!isOnline) {
            alert('Sua conexão caiu!');
        }
    }, [isOnline]);

    return (
        <div>
            {isOnline ? 'Você está Online' : 'Você está desconectado'}
            <Button color={'success'} variant={'contained'}>Clicar</Button>
        </div>
    );
}

export default App;
