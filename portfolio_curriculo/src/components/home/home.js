import React from 'react';
import "../home/home.css"
import flor from "../../images/flor.png"
import perfil from "../../images/foto_perfil.jfif"

function NewlineText(props) {
  const text = props.text;
  const newText = text.split('\n').map(str => <p>{str}</p>)
  return newText;
}

function Home() {
  return (
    <body className="Homepage">
        <header className="HomeHeader">
            <p className="contact">
              Juliana Souza
              julianasouzamelo2@gmail.com
              +55 61 981062410</p>
              <a className="links" href="https://github.com/julianasm" target="_blank">Github</a>
              <a className="links2" href="https://www.linkedin.com/in/juliana-m-293738b1/" target="_blank">LinkedIn</a>
            <img className="flor" src={ flor } alt="Três folhas formando uma flor" />
            <img className="flor2" src={ flor } alt="Três folhas formando uma flor" />
            <img className="flor3" src={ flor } alt="Três folhas formando uma flor" />
            <img className="flor4" src={ flor } alt="Três folhas formando uma flor" />
            <img className="perfil" src={ perfil } alt="Mulher negra sorrindo para a foto" />
        </header>
        <div className="content">
            <h3 className="experiences">
              Experiência profissional
            </h3>
            <p className="description">
            <NewlineText text={"Empresa: Supergeeks - 1ª Escola de Programação e Robótica do Brasil\n" +
            "Atribuições: Instrutora de programação para crianças e adolescentes\n"+
            "Período: Out/2020 - Mar/2021 \n" +
            "Empresa: Colégio Dromos\n"+
            "Atribuições: Monitoria de Ciências e Biologia\n" +
            "Período: Jun/2018 - Abr/2020 \n"}/>
            </p>
            <h3 className="academic">
                Formação acadêmica
            </h3>
             <p className="description2">
              <NewlineText text={"Curso: Anlálise e Desenvolvimento de Sistemas\n" + "Institução: Estácio \n" + "Ago/2020 - Dez/2022 \n" + "Curso: Ciências Biológias \n" + "Instituição: Universidade de Brasília \n" + "Mar/2016 - Dez/2020 \n"} />
             </p>
             <h3 className="habilities"> 
              Habilidades técnicas
             </h3>
             <p className="description3">
                <NewlineText text={"Conhecimentos básicos:\n" + "ReactJs, CSS3, HTML5, MySQL, Git/Github, Dart \n" + "Conhecimentos intermediários:\n" + "Python, C++ \n" + "Pacote Office: Word, Excel, PowerPoint;\n" + "Google Drive(Planilhas, Docs, Apresentações)\n" + "Inglês (B2 - Intermediário superior)\n"}/>
              </p>
            </div>
        </body>
  );
}

export default Home;
