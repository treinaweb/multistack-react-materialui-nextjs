
import './App.css';
import Contador from './components/MeuComponente/Contador';

function App() {
  const nome = "Arie" 
  const idade = 29

  return (
    <div >
      Olá 
      <Contador nome={nome} idade={idade} >

        meu nome é ariel

      </Contador>
    </div>
  );
}

export default App;
