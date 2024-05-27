import { UserProps } from "../types/user"; // Importa a interface UserProps

import Search from "../components/Search";// Importa o componente Search

import  User  from "../components/User";

import Error  from "../components/Error";

import Loader from "../components/Loader";

import { useState } from "react"; // Importa React e o hook useState


 const Home = () => {
    // Define o estado user para armazenar os dados do usuário, inicializado como null
    const [user, setUser] = useState <UserProps | null>(null);

    const [error, setErro] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    

   // Função assíncrona para carregar os dados do usuário do GitHub
    const loadUser = async(userName: string) => {

      setIsLoading(true);
      setErro(false);
      setUser(null);
        // Faz uma requisição à API do GitHub para obter os dados do usuário
        const res = await fetch(`http://api.github.com/users/${userName}`)

        // Converte a resposta para JSON
        const data = await res.json();

        setIsLoading(false);

        if(res.status === 404) {
          setErro(true);
          return;
        }

        // Desestrutura os dados relevantes do usuário
        const {avatar_url, login,location,followers,following} = data;
        // Cria um objeto userData com os dados desestruturados e do tipo UserProps
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };
        // Atualiza o estado user com os dados do usuário
        setUser(userData);

    };

        
       

 // Renderiza o componente Home
  return (
    <div>
       
        {/* Renderiza o componente Search, passando a função loadUser como prop */}
        <Search loadUser={loadUser}/>
        {isLoading && <Loader/>}
        {/* Se user não for null, renderiza o login do usuário */}
        {user && <User {...user}/>}
        {error && <Error/>}
    </div>
  );
};
export default Home;
