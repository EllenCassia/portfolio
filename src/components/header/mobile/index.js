import React from 'react';
import './mobile.css';

function Mobile({isOpen, setIsOpen}) {

  return (
  <div className='mobile'>
    <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
      <i className='fi-rr-cross-circle'></i>
    </div>
    <div className='mobile-option'>
      <a href='#project'> <i className='fi-rr-edit-alt option-icon'></i> Projeto</a>
      <a href='#skills'> <i className='fi-rr-laptop option-icon'></i> Experiências</a>
      <a href='#contato'> <i className='fi-rr-user option-icon'></i> Contato</a>
    </div>
  </div> 
  )
}
export default Mobile;
