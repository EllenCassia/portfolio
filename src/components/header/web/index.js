import React from 'react'
import './web.css'


function Web() {

  return (
    <div className='web-option'>
      <a href='#project'> <i className='fi-rr-edit-alt option-icon'></i> Projeto</a>
      <a href='#skills'> <i className='fi-rr-laptop option-icon'></i> Experiências</a>
      <a href='#contact'> <i className='fi-rr-user option-icon'></i> Contato</a>
    </div>
  )
}

export default Web;
