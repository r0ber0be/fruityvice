import { CartPage } from "../../common/CardFruit/CartPage";
import { Footer } from "../../common/Footer/Footer";
import { Navegador } from "../../common/Navegador/Navegador";

export function PaginaCart() {
  return (
    <div>
      <Navegador/>
      <CartPage/>
      <Footer/>
    </div>
  )
}