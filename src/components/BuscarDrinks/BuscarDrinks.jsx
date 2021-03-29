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
      <div className={styles.cartao}>
        <Button onClick={buscaDrink} content="Sorteie seu drink!" />
        <img className="imgDrink" src={dadosApi.strDrinkThumb}></img>
        <h3 className="titleDrink">{dadosApi.strDrink}</h3>
      </div>
    </div>
  );
};

export default BuscarDrinks;
