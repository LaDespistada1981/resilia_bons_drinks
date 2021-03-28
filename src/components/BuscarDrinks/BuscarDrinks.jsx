import React, { useState } from "react";
import styles from "../BuscarDrinks/BuscarDrinks.module.css";
import { drinkAleatorio } from "../../model/Url";

const BuscarDrinks = () => {
  const [dadosApi, setDadosApi] = useState("");

  async function buscaDrink() {
    const requisicao = await drinkAleatorio();
    console.log(requisicao.drinks[0]);
    setDadosApi(requisicao.drinks[0]);
  }

  return (
    <div className={styles.buscarDrinks}>
      <section className={styles.conteudoDrink}>
        <h1>Hello world</h1>
      </section>
    </div>
  );
};

export default BuscarDrinks;
