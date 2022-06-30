import useOnlineStatus from './data/hooks/useOnlineStatus';
import { Button } from '@mui/material'
import theme from './UI/thema/theme'
import { ThemeProvider } from '@mui/material'
function App() {
  const isOnline = useOnlineStatus()



  return (
    <div >
      <ThemeProvider theme={theme}>

        {isOnline ? 'Você está online' : 'Você está off-line'}
        <Button variant='contained'>Clique aqui!</Button>
      </ThemeProvider>

    </div>
  );
}

export default App;
