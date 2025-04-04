const DrinkChoise = ({ drink }) => {
  return (
    <>
      <p>{drink.name}</p>
      <img src="" alt={drink.name} width="100px" height="100px" />
      <p>Drink will be ready in a few minutes</p>
    </>
  );
};

export default DrinkChoise;
