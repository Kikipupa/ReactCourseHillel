import Button from "../components/Button/Button";

const renderItem = (item) => {
  return (
    <>
      <img src={item.imageUrl}></img>
      <div>
        <span>{item.name}</span>
        <p>{item.ingredients}</p>
        <span>{item.unitPrice}$</span>
      </div>
    </>
  );
  //)`${item.id} ${item.name} ${item.imageUrl} ${item.ingredients} ${item.soldOut}`;
};

export { renderItem };
