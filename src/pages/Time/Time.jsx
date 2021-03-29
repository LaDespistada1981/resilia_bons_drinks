import React from "react";
import styles from "../Time/Time.module.css";
import Card from "../../components/Card/Card";
import TextBox from "../../components/TextBox/TextBox";
import imgJuliette from "../../img/juliette_bbb.jpg";
import imgRobertinha from "../../img/robertinha.jpg";
import imgDayane from "../../img/dayane_bbb.jpg";
import imgCamila from "../../img/camila_bbb.jpg";

const Time = (props) => {
  return (
    <div className={styles.time}>
      <h1 className="titleTime">{props.titulo}</h1>
      <section className={styles.cards}>
        <div className={styles.linha1}>
          <div className={styles.card}>
            <Card nome="Roberta Santos" imagem={imgRobertinha} />
            <TextBox
              className={styles.textBox}
              content="Roberta é carioca e entre seus hobbies "
            />
          </div>
          <div className={styles.card}>
            <Card nome="Dayane Mello" imagem={imgDayane} />
            <TextBox
              className={styles.textBox}
              content="Dayane Mello é a modelo brasileira protagonista do BBB italiano. "
            />
          </div>
        </div>
        <div className={styles.linha2}>
          <div className={styles.card}>
            <Card nome="Juliette Freire" imagem={imgJuliette} />
            <TextBox
              className={styles.textBox}
              content="Juliette é paraibana e favorita ao BBB21. "
            />
          </div>
          <div className={styles.card}>
            <Card nome="Camila de Lucas" imagem={imgCamila} />
            <TextBox
              className={styles.textBox}
              content="Camila é a participante de Longe Iguaçú. "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Time;
