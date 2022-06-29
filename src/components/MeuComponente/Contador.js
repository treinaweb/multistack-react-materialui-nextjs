import myStyle from './contador.module.css'
import { useState } from 'react'


function Contador() {
    const [ numero, setNumero  ] = useState(0);



    return (
        <div className={myStyle['meu-contador']}>
            Contador : {numero}
            <button onClick={() =>setNumero(numero + 1)} >
                Click
            </button>
        </div>
    )

}

export default Contador