import { useState } from "react";
import { ApiService } from '../../data/apiService/apiService'




function ListaCursos() {
    const [cursos, setCursos] = useState([])


    function buscarCursos() { 
        ApiService.get('cursos').then(data => setCursos(data),)
    }

    return (
        <div>
            <button onClick={buscarCursos}>Click</button>
            <ul>
                {cursos.map((curso)=>{
                    return <li key={curso.id}>{curso.nome}</li>
                })}
            </ul>
        </div>
    )
}


export default ListaCursos