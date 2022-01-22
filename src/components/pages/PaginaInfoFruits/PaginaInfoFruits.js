import { Footer } from '../../common/Footer/Footer';
import { InfoFruits } from '../../common/InfoFruits/InfoFruits';
import { Navegador } from '../../common/Navegador/Navegador';

export default function PaginaInfoFruits(props) {
  let id = props.match.params.id;
  return (
    <div>
      <Navegador usuarioLogado="Fernanda"/>
      <InfoFruits data={id}></InfoFruits>
      <Footer></Footer>
    </div>
  )
}