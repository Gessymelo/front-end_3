import React from 'react'

const About = () => {
  return (
    <div>
    <h1>Resumo do Projeto: Busca de Usuários do GitHub</h1>
    

    <section>
      <h2>Descrição</h2>
      <p>Este projeto é uma aplicação web desenvolvida para buscar e exibir informações sobre usuários do GitHub. A aplicação foi construída utilizando React para a interface do usuário, TypeScript para uma tipagem mais robusta e segura, Material-UI para componentes estilizados e responsivos, e a API do GitHub para obter dados dos usuários.</p>
    </section>

    <section>
      <h2>Tecnologias Utilizadas</h2>
      <ul>
        <li><strong>React:</strong> Biblioteca JavaScript para construção de interfaces de usuário, permitindo a criação de componentes reutilizáveis e a gestão eficiente do estado da aplicação.</li>
        <li><strong>TypeScript:</strong> Superset do JavaScript que adiciona tipagem estática, ajudando a evitar erros comuns durante o desenvolvimento e proporcionando uma melhor experiência de desenvolvimento com autocompletar e verificações de tipo.</li>
        <li><strong>Material-UI:</strong> Biblioteca de componentes React que segue as diretrizes do Material Design, fornecendo componentes prontos para uso que são estilizados e responsivos.</li>
        <li><strong>API do GitHub:</strong> Interface de programação de aplicativos fornecida pelo GitHub que permite acesso programático aos dados de repositórios, usuários e outras entidades do GitHub.</li>
      </ul>
    </section>

    <section>
      <h2>Funcionalidades</h2>
      <ul>
        <li><strong>Busca de Usuários:</strong> Permite que os usuários da aplicação procurem outros usuários do GitHub digitando seus nomes de usuário em um campo de busca.</li>
        <li><strong>Exibição de Dados:</strong> Mostra informações detalhadas sobre os usuários encontrados, como nome, avatar, bio, e contagem de repositórios públicos.</li>
        <li><strong>Navegação:</strong> Inclui navegação interna para diferentes páginas da aplicação e links externos para perfis do GitHub.</li>
      </ul>
    </section>

    <section>
      <h2>Componentes Principais</h2>
      <h3>Componente de Busca</h3>
      <p>Campo de entrada onde o usuário pode digitar o nome de usuário do GitHub que deseja buscar. Usa um evento <code>onSubmit</code> para acionar a busca.</p>

      <h3>Componente de Resultados</h3>
      <p>Exibe os resultados da busca em um layout de cartão, utilizando componentes do Material-UI como <code>Card</code>, <code>CardMedia</code>, <code>CardContent</code>, e <code>Button</code>.</p>

      <h3>Componente de Navegação</h3>
      <p>Utiliza o React Router para navegar entre diferentes páginas internas da aplicação.</p>

      <h3>Integração com API</h3>
      <p>Faz requisições à API do GitHub usando <code>fetch</code> ou <code>axios</code> para obter dados de usuários e os exibe na interface.</p>
    </section>
    </div>
  )}

    




   
        


export default About;