import React from 'react';
import "../home/home.css";

function NewlineText(props) {
  const text = props.text;
  const newText = text.split('\n').map(str => <p>{str}</p>)
  return newText;
}

function Home() {
  return (
    <div className="Homepage">
        <header className="HomeHeader">
            <p1 className="contact">
              Juliana Souza
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
            <p className="description">
            <NewlineText text={"Supergeeks - 1ª Escola de Programação e Robótica do Brasil\n" +
            "Instrutora de programação para crianças e adolescentes\n"+
            "Out/2020 - Mar/2021 \n" +
            "Colégio Dromos\n"+
            "Monitoria de Ciências e Biologia\n" +
            "Jun/2018 - Abr/2020 \n"}/>
            </p>
            <h3 className="academic">
                Formação acadêmica
            </h3>
             <p className="description2">
              <NewlineText text={"Curso: Anlálise e Desenvolvimento de Sistemas\n" + "Institução: Estácio \n" + "Ago/2020 - Dez/2022 \n" + "Curso: Ciências Biológias \n" + "Instituição: Universidade de Brasília \n" + "Mar/2016 - Dez/2020 \n"} />
             </p>
        </body>
    </div>
  );
}

export default Home;
