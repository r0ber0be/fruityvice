import history from '../../../history';
import { useCart } from '../../../contexts/CartContext';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './CardFruit.css';


export function CardFruit(fruit) { //não é preciso usar contexto, essas props são necessárias
  
  const cart = useCart();
  const add = fruit => {
    cart.addItemToCart(fruit);
  }

  function verDetalhes() {
    history.push('/fruit/api/'+fruit.id);
  }

  return (
    <div className="cards">
      <div className='cards-list'>
        <InfoOutlinedIcon fontSize="small" onClick={verDetalhes} className='infoicon'/> 
        <div className='card'>
          <div className="gene-fruta">
            {fruit.genus}
          </div>
          <div className="nome-fruta" onClick={verDetalhes}>
            Fruta: {fruit.name}
          </div>
        </div>
        
        <div >
          <Button 
            variant="contained"
            onClick={() => add(fruit)}>
              Add to Cart
              <AddShoppingCartOutlinedIcon/>
          </Button>
        </div> 
      </div>
    </div>  
  )
}