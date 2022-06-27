import { useState } from 'react';
import myStyles from './Contador.module.css';
import { MinhaDiv, MeuBotao } from './Contador.styled'

function Contador(props) {
    const [numero, setNumero] = useState(9);

    return (
        <div className={myStyles['meu-contador']} >
            Contador: {numero}
            <MeuBotao onClick={() => setNumero(numero + 1)} >Click</MeuBotao>
            <MinhaDiv >

                <p className='meuParagrafo'>minha div</p>
                <p>minha div</p>
            </MinhaDiv>
        </div>
    );
}

export default Contador;