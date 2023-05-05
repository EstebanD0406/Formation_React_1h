export default function Fruit(props) {
  //State
  const fruitInfo = props.fruitInfo;
  const onFruitDelete = props.onFruitDelete;

  //Comportement

  //Affichage (render)
  return (
    <li>
      {fruitInfo.nom}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}
