import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ColabCard({ image, title, description, route, externalLink, cardWidth = 300, cardHeight = 400 }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, height: cardHeight }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: cardHeight * 0.4 }} // Ajusta a altura da imagem proporcionalmente
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {externalLink ? (
          <Button size="small" color="primary" component="a" href={externalLink} target="_blank" rel="noopener noreferrer">
             {title}
          </Button>
        ) : (
          <Button size="small" color="primary" onClick={handleButtonClick}>
            {title}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ColabCard;
