import React, { useEffect } from 'react';
import './projeto.css'; 

function Projeto() {
  const [repositorios, setRepositorios] = React.useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/ellencassia/repos')
      const data = await response.json()
      setRepositorios(data)
    }
    fetchData()
  }
  , [])

  return (
    <div className='info'>
      <div className='info-top'>
        <div className='info-subtitle'>
          Explore meus
        </div>
        <div className='info-title'>
          Projetos
        </div>
      </div>
      <div className='info-menu'>
        <ul>
          {repositorios.map(repositorio => {
            return (
              <li key={repositorio.id}>
                <h3>{repositorio.name}</h3>
                <p>{repositorio.description}</p>
                <a href={repositorio.html_url} target="_blank" rel="noreferrer">
                  Saiba Mais
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Projeto;
