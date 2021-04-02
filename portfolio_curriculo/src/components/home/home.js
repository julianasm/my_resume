import React from 'react';
import "../home/home.css";

function Home() {
  return (
    <div className="Homepage">
        <header className="HomeHeader">
            <img className="flor" src="/images/flor.png" alt="Três folhas formando uma flor" />
            <img className="perfil" src="/images/foto_perfil.jfif" alt="Mulher negra sorrindo para a foto" />
        </header>
    </div>
  );
}

export default Home;
