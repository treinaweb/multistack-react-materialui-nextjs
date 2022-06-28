// localhost:3000/api/cursos
const meusCursos = [
    {
        id: '1',
        nome: 'React'
    },
    {
        id: '2',
        nome: 'Next.js'
    }
]

export default function Cursos(request, response) {
    const id = request.query.cursoId
    const curso = meusCursos.find(curso => curso.id === id )
    if(curso){
        response.status(200).json(curso)

    }else{
        response.status(404).json({message: 'Curso nao encontrado'})
    }
}