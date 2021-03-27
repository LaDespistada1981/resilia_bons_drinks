import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "../Drinks/Drinks.module.css";

const Drinks = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.drinks[0].strDrink);
      });
  }, []);

  return (
    <div className={styles.div}>
      <h1>Drinks</h1>
      <Button />
    </div>
  );
};

export default Drinks;
