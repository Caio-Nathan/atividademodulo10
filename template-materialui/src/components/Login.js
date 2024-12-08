import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Substitua esta lógica com validação real
    if (email === 'admin@example.com' && password === 'password') {
      alert('Login bem-sucedido!');
      navigate('/'); // Redireciona para a página inicial após o login
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ margin: '10px', padding: '5px', width: '250px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Senha:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={{ margin: '10px', padding: '5px', width: '250px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#2E3B55', color: 'white', border: 'none', borderRadius: '5px' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
