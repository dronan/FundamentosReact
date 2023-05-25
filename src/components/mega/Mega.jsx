import React, { useState } from "react";
import "./Mega.css";

export default (props) => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        // retorna true se o array incluir o aleatorio, se contem, ele executa a função novamente
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
    }

    function gerarNumeros(qdte) {
        const numeros = Array(qdte)
                                .fill(0)
                                .reduce((nums) => {
                                    const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                                    return [...nums, novoNumero]
                                }, [])
                                .sort((n1, n2) => n1 - n2)
        /* 
            o reduce funciona assim: ele vai pegar o array vazio, e vai adicionar um novo numero, 
            e vai retornar o array com o novo numero como parametro para a proxima iteração, ou seja, 
            a cada interacao, é preenchido um numero e retornado o array com o numero preenchido, 
            e assim por diante, até chegar na quantidade de numeros que eu quero
        */
                        
        return numeros;
    }
    
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Quantidade de números</label>
                <input type="number" min={6} max={15} value={qtde} onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar números
            </button>
        </div>
    )
}