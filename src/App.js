import { useState } from "react";
import Fruit from "./Component/Fruit";
import FruitForm from "./Component/FruitForm";

export default function App() {
  //State (état, données)
  const [compteur, setCompteur] = useState(1); //Définition d'un state que j'initialise à '1' qu'on récupère dans le compteur qui peut être uniquement modifié par setCompteur

  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // const voiture = <li>Tesla</li>;
  // const listeVoiture = [<li>Audi</li>, <li>BMW</li>, <li>Clio</li>];

  //Comportement
  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  const handleSupprFruit = (id) => {
    //Fonction qui permet de supprimer un élément d'une copy d'un tableau existant
    console.log(id);
    //1. Copie du state
    const fruitCopy = [...fruits]; //Création d'un nouveau tableau copy
    //2. Manipuler le state
    const fruitCopyUpdated = fruitCopy.filter((fruit) => fruit.id !== id); //Conserve les éléments qui n'ont pas été cliqué
    //3. Modifier le state avec son setter
    setFruits(fruitCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1. copy du state
    const fruitsCopy = [...fruits];
    //2. manipulation sur la copy du state
    fruitsCopy.push(fruitAAjouter);
    //3. modifier le state avec le setter
    setFruits(fruitsCopy);
  };

  //Affichage (render) où l'on met du code JSX
  return (
    <div>
      <h1>{compteur}</h1>{" "}
      {/* Interpolation JSX avec des {} : Permet d'inclure du code Javascript dans du JSX */}
      <button onClick={handleClick}>Incrémente</button>{" "}
      {/* Un évenement React reçoit toujours une fonction fléchée */}
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <Fruit
              fruitInfo={fruit}
              onFruitDelete={handleSupprFruit}
              key={fruit.id}
            />
          );
        })}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

//Géstion d'un formulaire
//1. Création du formulaire
//2. Soumussion du formulaire
//3. Collecte des données du formulaire
//3.a. document.getElementById "React" (Pas cool parce qu'il passe pas par le state)
//3.b. Méthode plus sympa (Synchronisation descendante/ascendante)
