import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {

    const list = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i%2 == 0 ? 'Par': 'Impar'} >
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className='TabelaProdutos'>
            <h2>Lista de Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}
