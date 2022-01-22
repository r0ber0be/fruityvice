import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import '../CardFruit/CardFruit.css';
import './InfoFruits.css';

export function InfoFruits(fruit) { //current ID
  const {fruitsDb} = useContext(CartContext);
  
  let fruitsFilter = fruitsDb.filter(f => {
    if(String(fruit.data) === String(f.id)) {
      return f;
    }
    return false;
  });

  const fruta = fruitsFilter[0];

  return (
    <main className="linha-do-tempo">
      <div className="info-frutas">
        <div className="nome-fruta">
          
          Fruta: {fruta?.name || "Loading..."} <br/>
          Gene: {fruta?.genus|| "Loading..."} <br/>
          Familia: {fruta?.family || "Loading..."} <br/>
          Carboidratos: {fruta?.nutritions.carbohydrates || "Loading..."} <br/>
          Proteínas: {fruta?.nutritions.protein || 0} <br/>
          Gordura: {fruta?.nutritions.fat || 0} <br/>
          Calorias: {fruta?.nutritions.calories || "Loading..."} <br/>
          Açúcar: {fruta?.nutritions.sugar || "Loading..."}
        </div>
      </div>
    </main>
  )
}