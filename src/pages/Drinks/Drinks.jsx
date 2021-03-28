import React from "react";
import styles from "../Drinks/Drinks.module.css";
import BuscarDrinks from "../../components/BuscarDrinks/BuscarDrinks";

const Drinks = (props) => {
  return (
    <div className={styles.buscarDrinks}>
      <h1 className={StyleSheet.titleDrinks}>{props.titulo}</h1>
      <BuscarDrinks />
    </div>
  );
};

export default Drinks;
