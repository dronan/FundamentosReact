import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";
import FamiliaMembros from "./components/basicos/FamiliaMembros";
import Repeticao from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";

export default () => (
  <div id="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

      <Card titulo="#12 Formulario" color="#317773">
        <Input></Input>
      </Card>

      <Card titulo="#11 Comunicação indireta" color="#00539C">
        <IndiretaPai></IndiretaPai>
      </Card>


      <Card titulo="#10 Comunicação direta" color="#EEA47F">
        <DiretaPai></DiretaPai>
      </Card>
      

      <Card titulo="#9 Condicional" color="#f3ca20">
        <ParOuImpar numero={17}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Diego' }} />
      </Card>
      

      <Card titulo="#8 Produtos" color="#0d1137">
        <ListaProdutos></ListaProdutos>
      </Card>
      
      <Card titulo="#7 Repetição" color="#322514">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#6 Componente com Filhos" color="#00c8f8">
        <Familia sobrenome="Kulian">
            <FamiliaMembros nome="Pedro" />
            <FamiliaMembros nome="Ana" /> 
            <FamiliaMembros nome="Gustavo"/>
        </Familia>
      </Card>

      <Card titulo="#5 Desafio aleatório" color="#FA6900">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo="#3 Fragmento" color="#E94C6F">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="#2 Com parametro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno"
          aluno="João"
          nota={9.4}
        ></ComParametro>
      </Card>

      <Card titulo="#1 Primeiro componente" color="#588c73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
