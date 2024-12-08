import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';  // Ícone de Home (Casa)
import { useNavigate } from 'react-router-dom';  // Hook de navegação

function Header() {
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o clique no ícone de home
  const handleHomeClick = () => {
    navigate('/'); // Navega para a página principal
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: '#2E3B55', // Cor personalizada
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar>
          {/* Ícone de Home (Casa) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
            onClick={handleHomeClick}  // Navega para a página inicial
          >
            <HomeIcon />  {/* Ícone de Casa */}
          </IconButton>
          {/* Título centralizado */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontFamily: 'Roboto, sans-serif', 
              fontWeight: 'bold', 
            }}
          >
            Gerenciamento de Projetos
          </Typography>
          {/* Botão de login */}
          <Button 
            color="inherit" 
            sx={{ 
              fontSize: '1rem', 
              textTransform: 'none', 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
            }}
            onClick={() => navigate('/login')}  // Navega para a página de login
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
