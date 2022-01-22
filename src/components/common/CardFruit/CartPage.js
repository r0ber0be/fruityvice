import { useCart } from "../../../contexts/CartContext";
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Button } from "@mui/material";

export function CartPage() {
  
  const cart = useCart();
  const remove = (index) => {
    cart.removeItemFromCart(index);
  }
  
  return (
    <main className="linha-do-tempo">
      <div className="container-cards">
        {cart.fruitsCart?.map((fruits, index) => { 
          return (
            <div key={index} className="cards">
              <div className='cards-list'>
                <div className='card'>
                  <div className="gene-fruta">
                    {fruits.genus}
                  </div>
                  <div className="nome-fruta" >
                    Fruta: {fruits.name}
                  </div> 
                </div> 
              <div>
              <Button 
                variant="contained"
                onClick={() => remove(index)}>
                  EXCLUIR
                  <RemoveShoppingCartOutlinedIcon/>
              </Button>
            </div>
          </div>
        </div>  
          )
        })}
      </div>   
      
      <Button
        variant="contained"
        onClick={() => cart.clearCart()}>
          LIMPAR TUDO
          <RemoveShoppingCartOutlinedIcon/>
      </Button>  
    </main>
  )
}