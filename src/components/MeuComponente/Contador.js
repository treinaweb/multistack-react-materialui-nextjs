import { useState } from 'react';
import myStyles from './Contador.module.css';


function Contador(props){
    const [numero, setNumero] = useState(9);

    return ( 
        <div className={myStyles['meu-contador']} >
            Contador: {numero} 
            <button onClick={() => setNumero(numero + 1)} >Click</button>
        </div>
    );
}

export default Contador;