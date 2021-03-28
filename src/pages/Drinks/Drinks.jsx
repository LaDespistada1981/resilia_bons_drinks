import React from "react";
import styles from "../Drinks/Drinks.module.css";
import Card from "../../components/Card/Card";
import BuscarDrinks from "../../components/BuscarDrinks/BuscarDrinks";

const Drinks = (props) => {
  return (
    <div className={styles.buscarDrinks}>
      <h1 className={styles.titleDrinks}>{props.titulo}</h1>
      <BuscarDrinks />
      <Card />
    </div>
  );
};

export default Drinks;
