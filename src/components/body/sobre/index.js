import React from 'react'
import './sobre.css'
import SocialContato from '../../social-contato'


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
          <img src="https://media.licdn.com/dms/image/D4D03AQFDlmW8_f3hyA/profile-displayphoto-shrink_800_800/0/1676493254757?e=2147483647&v=beta&t=-zUkGYW19Ne1YrfHt6zCznluefL6UVxiqg7BrRT8Ec0" className='picture' alt='foto' />
        </div>
      </div>  
    </div>
  );
}

export default Sobre;


