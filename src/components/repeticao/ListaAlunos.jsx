import React from 'react'
import alunos from '../../data/alunos'
import './ListaAlunos.css'

export default props => {
    
    const lis = alunos.map(aluno => {
        return ( 
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome}: {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul className='ListaAlunos'>
                {lis}
            </ul>
        </div>
    )
}