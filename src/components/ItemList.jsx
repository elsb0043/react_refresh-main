// Hvad er fejlen her og hvordan løses den?
// Der manglede en key på <li>

const ItemList = () => {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
