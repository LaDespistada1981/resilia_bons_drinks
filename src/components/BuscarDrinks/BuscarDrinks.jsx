import React, { useState, useEffect } from "react";
import styles from "../BuscarDrinks/BuscarDrinks.module.css";
import Button from "../Button/Button";
import { requisicao } from "../../model/Url";

const BuscarDrinks = () => {
  const [dadosApi, setDadosApi] = useState("");

  useEffect(async () => {
    const req = await requisicao();
    setDadosApi(req);
    console.log(req);
  }, []);

  return (
    <div className={styles.buscarDrinks}>
      <section className={styles.buttons}>
        <Button type="submit" content="Drinks Populares" />
        <Button type="submit" content="Buscar Drinks" />
      </section>
      <section className={styles.conteudoDrink}>
        <h1>Hello world</h1>
      </section>
    </div>
  );
};

export default BuscarDrinks;
