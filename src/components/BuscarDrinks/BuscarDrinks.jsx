import React, { useState } from "react";
import { drinkAleatorio } from "../../model/DrinkAleatorio";
import styles from "../BuscarDrinks/BuscarDrinks.module.css";
import Button from "../Button/Button";

const BuscarDrinks = () => {
  const [dadosApi, setDadosApi] = useState("");

  async function buscaDrink() {
    const requisicao = await drinkAleatorio();
    console.log(requisicao.drinks[0]);
    setDadosApi(requisicao.drinks[0]);
  }

  return (
    <div className={styles.sorteiaDrink}>
      <div className={styles.divBtn}>
        <Button onClick={buscaDrink} className="btn" />
        <button>Sorteie seu drink grátis!</button>
      </div>
      <div className={styles.cartao}>
        <img className="imgDrink" src={dadosApi.strDrinkThumb}></img>
        <h1 className="titleDrink">{dadosApi.strDrink}</h1>
      </div>
    </div>
  );
};

export default BuscarDrinks;
