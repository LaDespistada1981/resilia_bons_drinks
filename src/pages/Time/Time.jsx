import React from "react";
import styles from "../Time/Time.module.css";
import Card from "../../components/Card/Card";
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
            <Card nome="Dayane Mello" imagem={imgDayane} />
            <Card nome="Juliette Freire" imagem={imgJuliette} />
            <Card nome="Camila de Lucas" imagem={imgCamila} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Time;
