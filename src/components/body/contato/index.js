import React, { useState } from 'react';
import './contatos.css';
import emaijs from '@emailjs/browser';
import { validate } from '../../validate/validate';
import { showErrorMessage, showSucessMessage} from '../../toastr/toastr.js';

function Contatos() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  const handleFormSubmit = (event) => {
  
    event.preventDefault();

    const errors = validate(nome, email, mensagem);
   
    if(errors.length > 0){
      errors.forEach((message,index) => {
        showErrorMessage(message);
      });
      return false;
    }
    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };
    emaijs.send("service_q24noyr","template_c7s1iq4",templateParams,"qzGwAE7SIpbzx6ecJ").then((response) => {
        showSucessMessage('Mensagem enviada com sucesso!');
        setNome('');
        setEmail('');
        setMensagem('');
    }).catch((err) => {
      showErrorMessage('Erro ao enviar mensagem');
    });
  };


  return (
    <div className='info'>
      <div className='info-top'>
        <div className='info-subtitle'>
          Para entrar em
        </div>
        <div className='info-title'>
          Contato
        </div>
      </div>
      <div className='info-menu'>
        <form className='contact-form' onSubmit={handleFormSubmit}>
          <label htmlFor='nome'>Nome:</label>
          <input
            type='text'
            id='nome'
            name='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label htmlFor='email'>E-mail:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor='mensagem'>Mensagem:</label>
          <textarea
            id='mensagem'
            name='mensagem'
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>

          <button type='submit'>Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contatos;
