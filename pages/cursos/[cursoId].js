import { useRouter } from 'next/router'
import { useState, useEffect } from "react"


export default function Cursos() {
    const router = useRouter()
    const [curso, setCurso] = useState({})
    const id = router.query.cursoId

    useEffect(() => {
        if(id){
            
            fetch(`http://localhost:3000/api/${id}`)
                .then(response => response.json())
                .then(data => setCurso(data))
        }

    }, [id])

    if(curso.message){
        return <div>{curso.message}</div>
    }
    return <div>meus cursos é: {curso.nome} </div>
}