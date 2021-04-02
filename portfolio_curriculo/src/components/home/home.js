import React from 'react';
import "../home/home.css";

function Home() {
  return (
    <div className="Homepage">
        <header className="HomeHeader">
            <p1 className="contact">
              Juliana Souza de Melo
              julianasouzamelo2@gmail.com
              +55 61 981062410</p1>
              <a className="links" href="https://github.com/julianasm">Github</a>
              <a className="links2" href="https://www.linkedin.com/in/juliana-m-293738b1/">LinkedIn</a>
            <img className="flor" src="/images/flor.png" alt="Três folhas formando uma flor" />
            <img className="flor2" src="/images/flor.png" alt="Três folhas formando uma flor" />
            <img className="flor3" src="/images/flor.png" alt="Três folhas formando uma flor" />
            <img className="flor4" src="/images/flor.png" alt="Três folhas formando uma flor" />
            <img className="perfil" src="/images/foto_perfil.jfif" alt="Mulher negra sorrindo para a foto" />
        </header>
        <body className="content">
            <h3 className="experiences">
              Experiência profissional
            </h3>
        </body>
    </div>
  );
}

export default Home;
