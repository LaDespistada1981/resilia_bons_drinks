import React from "react";

const CardGroup = () => {
  return (
    <div className={styles.cardGroup}>
      {dados.results.map((drinks, index) => (
        <Card img={drinks.picture} keys={index} />
      ))}
      <Button />
    </div>
  );
};

export default CardGroup;
