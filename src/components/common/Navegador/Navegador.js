import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../../img/logo.png';
import "./Navegador.css";

export function Navegador() {

  const {fruitsCart} = useContext(CartContext);
  
  return( 
    <div className="navegador">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav-butao">
        <NavLink
          exact
          className="link-navegador"
          to="/">
            Lista de Itens
        </NavLink>
    
        <NavLink
          className="link-navegador nome-usuario"
          to="/carrinho/">
            <ShoppingCartOutlinedIcon/>
            {fruitsCart?.length>0 && <span className="qtd-itens">{fruitsCart?.length}</span>}
        </NavLink>
      </nav>
    </div>
  )
}