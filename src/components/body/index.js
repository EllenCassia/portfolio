import React from 'react'
import './body.css'
import Experiencia from './experiencia';
import Contatos from './contato';
import Projeto from './projeto';
import Sobre from './sobre';

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <Sobre/>
      </section>
      <section id='project'>
        <Projeto/>
      </section>
      <section id='skills'>
        <Experiencia/>
      </section>
      <section id='contact'>
        <Contatos/>
      </section>
    </div>
  )
}

export default Body;
