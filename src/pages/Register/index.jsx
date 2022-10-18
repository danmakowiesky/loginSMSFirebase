import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  {signUp}  from '../../service/firebase';

import './styles.css';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const handleSignOut = async (e) => {
    e.preventDefault();
    await signUp(email, password)
  };


  return (
    <div className='container'>
      <header className='header'>
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className='inputContainer'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='email@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='inputContainer'>
          <label htmlFor='password'>Senha</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********************'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignOut} className='button'>
          Cadastrar
        </button>
        <div className='footer'>
          <p>Você já tem uma conta?</p>
          <Link to='/'>Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
