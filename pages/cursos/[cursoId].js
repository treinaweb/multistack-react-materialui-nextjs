import { useRouter } from 'next/router'
import { useState, useEffect } from "react"


export async function getStaticPaths() {

    return {
        paths: [
            {
                params: {
                    cursoId: '1'
                }
            },
            {
                params: {
                    cursoId: '2'
                }
            },
            {
                params: {
                    cursoId: '3'
                }
            },
        ],
        fallback: false,
    }
}

export async function getStaticProps(ctx) {
    const id = ctx.params.cursoId
    const response = await fetch(`http://localhost:3000/api/${id}`)
    const data = await response.json()
    return {
        props: {
            curso: data,

        }
    }

}

export default function Cursos(props) {
    const curso = props.curso

    if (curso.message) {
        return <div>{curso.message}</div>
    }
    return <div>meus cursos é: {curso.nome} </div>
}