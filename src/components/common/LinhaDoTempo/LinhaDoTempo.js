import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CardFruit } from "../CardFruit/CardFruit";
import "./LinhaDoTempo.css";

export function FruitsList() {

  const {fruitsDb} = useContext(CartContext);

  let fruit = fruitsDb.map((fruit, index) => (
    <CardFruit key={index}
          id={fruit.id}
          name={fruit.name}
          family={fruit.family}
          genus={fruit.genus}
          order={fruit.order} 
          nutritions={fruit.nutritions}
          carbohydrates={fruit.carbohydrates}
          protein={fruit.protein}
          fat={fruit.fat}
          calories={fruit.calories}
          sugar={fruit.sugar}>            
    </CardFruit>)
  );
  
  return (
    <main className="linha-do-tempo">
      <div className="container-cards">
        { fruit }
      </div>
    </main>
  );
}

