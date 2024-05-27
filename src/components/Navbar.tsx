
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { SiGithub } from "react-icons/si";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2b3566' }}>
        <Toolbar>
          <IconButton
           size="large"
           edge="start"
           aria-label="menu"
           sx={{ mr: 2 }}
          >
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          <SiGithub /> Github Finder
          </Typography>
                       
          <Button   color="inherit" component={Link} to= "/"  > Inicio</Button>
          <Button   color="inherit" component={Link} to="/about"> Sobre</Button>
          <Button   color="inherit" component={Link} to= "/colab"> Equipe</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
