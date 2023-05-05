import { useState } from "react";

export default function FruitForm({ handleAdd }) {
  //State
  const [nvFruits, setNvFruits] = useState("");

  //Comportement
  const handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = nvFruits;
    const fruitAAjouter = { id, nom };
    handleAdd(fruitAAjouter);
    // fruitsCopy.push(fruitAAjouter);
    setNvFruits("");
  };

  const handleChange = (event) => {
    const value = event.target.value; //Valeur de l'input après un changement
    setNvFruits(value); //Attribution de la nouvelle valeur à l'input
  };

  //Affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nvFruits}
        type="text"
        placeholder="Ajouter un fruit..."
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
}
