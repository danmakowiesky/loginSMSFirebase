import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../service/firebase';

import './styles.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return navigate('/dashboard', { data: user });
  }
  return (
    <div className='container'>
      <header className='header'>
        <span>Por favor digite suas informações de login</span>
      </header>

      <form>
        <div className='inputContainer'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='johndoe@gmail.com'
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
        <a href='#'>Esqueceu sua senha ?</a>
        <button className='button' onClick={handleSignIn}>
          Entrar
        </button>{' '}
        <div className='footer'>
          <p>Você não tem uma conta?</p>
          <Link to='/register'>Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
