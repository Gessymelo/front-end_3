// Define o tipo SearchProps, que é um objeto contendo a função loadUser.
// A função loadUser aceita uma string (userName) e retorna uma Promise<void>.
type SearchProps ={
    loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

// Importa o ícone BsSearch da biblioteca react-icons.
import { BsSearch } from "react-icons/bs";

// Importa os estilos do módulo CSS
import classes from "./Search.module.css";


const Search = ({loadUser}: SearchProps) => {
    // Desestrutura a prop loadUser do objeto de props, aplicando o tipo SearchProps.
    const[userName, setUserName] = useState("");
     // Define o estado userName para armazenar o valor do campo de entrada, inicializado como uma string vazia.
  
        const handdleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter"){
                loadUser(userName);
            }
        };
  
     return (
    <div className={classes.search}>
       
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={classes.search_container}>
            
            <input type='text' placeholder='Digite o nome do usuário' 
            // Atualiza o estado userName conforme o usuário digita no campo de entrada.
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handdleKeyDown} /> 
            <button onClick={() => loadUser(userName)}>
                <BsSearch/> {/* Ícone de busca do react-icons */}
            </button>
        </div>

    </div>
  )
}

export default Search;