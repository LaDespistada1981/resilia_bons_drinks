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
        content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur."
      ></TextBox>
    </main>
  );
};

export default Sobre;
