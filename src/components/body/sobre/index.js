import React from 'react'
import './sobre.css'
import SocialContato from '../../social-contato'
import foto from '../../../assets/foto.jpg';



function Sobre() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Olá 👋, Sou
          <br /><span className='about-name'>Ellen Cassia.</span>
          <br /><span className='about-text'>Desenvolvedora com experiência em React.js, JavaScript, Styled Components, e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis. Graduando em Análise e desenvolvimento de Sistemas.</span>
          <div className='social-box'>
           <SocialContato />
          </div>
        </div>
        <div className='about-photo'>
          <img src={foto} className="picture" alt="foto" />
        </div>
      </div>  
    </div>
  );
}

export default Sobre;


