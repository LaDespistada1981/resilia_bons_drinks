import React from "react";
import imagem from "../../img/about-pic.jpg";
import styles from "../Sobre/Sobre.module.css";
import TextBox from "../../components/TextBox/TextBox";
import ImgBox from "../../components/ImgBox/ImgBox";

const Sobre = (props) => {
  return (
    <main className={styles.sobre}>
      <h1 className="titleContato">{props.titulo}</h1>
      <ImgBox imagem={imagem} alt="Imagem de drinks sobre uma mesa" />
      <TextBox
        content="Bons drinks, é o projeto final do módulo de react do curso de desenvolvimento web full stack da Resilia Educação.
      Na Resilia pude aprender ao longo de 7 meses conteúdos de front e back end, banco de dados relacional e não relacional, 
      versionamento de código utilizando git e github, docker e ínumeras outras ferramentas que foram essenciais para minha formação.
      Além de todas as habilidades técnicas já relatas acima, ainda aprendemos a desenvolver diversas soft skils úteis a nossa formação
      profissional como gestão do tempo, metodologias ágeis, metodologia design thinking, comunicação
      não agressiva e diversas outras."
      ></TextBox>
    </main>
  );
};

export default Sobre;
