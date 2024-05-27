import * as React from 'react';
import ColabCard from '../components/ColabCard';
import { Container, Grid } from '@mui/material';

const Colaboradores = () => {
  const cardsData = [
    {
      image: '/public/Mariane.jpg',
      title: 'Marianne Soares',
      description: 'Uma paixão especial pela linguagem Python e seus diversos frameworks voltados para análise de dados, desenvolvimento web e automação.',
      externalLink: 'https://github.com/mariannesoares', // Link externo
      cardHeight: 380,
    },
    {
      image: '/public/Gustavo.png',
      title: 'Gustavo Morais',
      description: 'Estudante de Sistemas para internet apaixonado por java, procurando sempre aprender novas coisa e encontrar desafios.',
      externalLink: 'https://github.com/Gsttv', // Link externo
       cardHeight: 380,
    },
    {
      image: '/public/Ricardo.jpg',
      title: 'Ricardo Amaral',
      description: 'Nao concordei com isso!',
      externalLink: 'https://github.com/RicardoAPAmaral', // Link externo
       cardHeight: 380,
    },
    {
      image: '/public/Gessy.png',
      title: 'Gessy Mello',
      description: 'Desbravando o limbo da Tecnologia , em constante aprendizado! 🚀💻',
      externalLink: 'https://github.com/Gessymelo', // Link externo
       cardHeight: 380,
    },
    {
      image: '/public/Alfredo.png',
      title: 'Alfredo',
      description: 'to de boas !!',
      externalLink: 'https://github.com/alfredogog', // Link externo
       cardHeight: 380,
    },
    
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ColabCard
              image={card.image}
              title={card.title}
              description={card.description}
              externalLink={card.externalLink}
              cardHeight={card.cardHeight}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Colaboradores;
