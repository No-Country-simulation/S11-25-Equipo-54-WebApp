import Card from "../components/card/Card";

const Category = () => {
  const cards = [
    {
      id: 1,
      name: "Lenovo",
    },
    {
      id: 2,
      name: "Lenovo",
    },
    {
      id: 3,
      name: "Lenovo",
    },
    {
      id: 4,
      name: "Lenovo",
    },
    {
      id: 5,
      name: "Lenovo",
    },
    {
      id: 6,
      name: "Lenovo",
    },
    {
      id: 7,
      name: "Lenovo",
    },
    {
      id: 8,
      name: "Lenovo",
    },
  ];
  return (
    <>
      <h2>Categoría</h2>

      <section className="w-full h-dvh grid grid-cols-4 place-items-center">
        {cards.map((card) => (
          <Card key={card.id} name={card.name} />
        ))}
      </section>
    </>
  );
};
export default Category;
