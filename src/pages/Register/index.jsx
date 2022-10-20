import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp, sendPhoneNumber, sendPhoneCode } from '../../service/firebase';

import './styles.css';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [phoneCode, setPhoneCode] = useState('');

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  const PhoneNumber = async (e) => {
    e.preventDefault();
    await sendPhoneNumber(phoneNumber);
  };

  const sendPhoneNumberCode = async (e) => {
    e.preventDefault();
    await sendPhoneCode(phoneCode);
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
        <div className='inputContainer'>
          <label htmlFor='phone'>Telefone</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='+55 11 9123456789'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button onClick={handleSignOut} id='sign-in-button' className='button'>
          Autenticar usando e-mail
        </button>
        &nbsp;
        <button onClick={PhoneNumber} id='button-phone' className='button'>
          Autenticar usando celular
        </button>
        &nbsp;
        <div className='inputContainer'>
          <label htmlFor='text'>Código de verificação</label>
          <input
            type='text'
            name='text'
            id='text'
            placeholder='12345'
            onChange={(e) => setPhoneCode(e.target.value)}
          />
        </div>
        <button
          onClick={sendPhoneNumberCode}
          id='button-code'
          className='button'
        >
          Confirmar código
        </button>
        <div className='footer'>
          <p>Você já tem uma conta?</p>
          <Link to='/'>Acesse sua conta aqui</Link>
          <div id='recaptcha-container'></div>
        </div>
      </form>
    </div>
  );
}

export default Register;
