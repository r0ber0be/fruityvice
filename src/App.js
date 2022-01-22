import { Router, Route } from 'react-router-dom';
import { PaginaFeed } from './components/pages/PaginaPrincipal/PaginaFeed';
import history from './history';
import PaginaInfoFruits from './components/pages/PaginaInfoFruits/PaginaInfoFruits';
import { CartProvider } from './contexts/CartContext';
import { PaginaCart } from './components/pages/PaginaCart/PaginaCart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router history={history}>
        <Route exact path="/">
          <PaginaFeed/>
        </Route> 

        <Route exact path="/carrinho">
          <PaginaCart/>
        </Route>

        <Route path="/fruit/api/:id"
          component={PaginaInfoFruits}
        />
      </Router>
    </CartProvider>    
  );
}

export default App;