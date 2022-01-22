import { Navegador } from "../../common/Navegador/Navegador";
import { FruitsList } from "../../common/LinhaDoTempo/LinhaDoTempo";
import { Footer } from "../../common/Footer/Footer";
export function PaginaFeed() {
  return (
    <div>
      <Navegador usuarioLogado="Fernanda"/>
      <FruitsList></FruitsList>
      <Footer/>
    </div>
  )
}