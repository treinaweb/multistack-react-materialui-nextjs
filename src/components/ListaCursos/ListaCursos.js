import {useState} from 'react';
import {ApiService} from '../../data/services/ApiService';

function ListaCursos(){
    const [cursos, setCursos] = useState([]);

    function buscarCursos(){
        ApiService.get('cursos')
            .then(data => setCursos(data));
    }

    return (
        <div>
            <button onClick={buscarCursos} >Procurar Cursos</button>
            <ul>
                {cursos.map(item => (
                    <li key={item.id} >{item.nome}</li> 
                ))}
            </ul>
        </div>
    )
}

export default ListaCursos;