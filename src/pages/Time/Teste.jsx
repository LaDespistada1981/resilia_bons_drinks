import React, { useState, useEffect } from "react";

const Teste = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.drinks[0].strDrink);
      });
  }, []);

  return (
    <>
      <h1></h1>
    </>
  );
};

export default Teste;
