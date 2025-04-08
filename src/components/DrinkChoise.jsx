const DrinkChoise = ({ drink }) => {
  return (
    <>
      <div>
        <p>{drink.name}</p>
        <img src={drink.imgUrl} alt={drink.name} width="100px" height="100px" />
        <p>Drink will be ready in a few minutes</p>
      </div>
    </>
  );
};

export default DrinkChoise;
