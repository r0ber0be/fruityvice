import './Footer.css';

export function Footer() {
  return (
    <footer className="linha-do-tempo">
      <div className="content-footer">
        <section>
          <h3>FRUITYVICE</h3>
          <p>Somos o melhor marketplace de hortfruit
            <br/>do Brasil, premiados com o GPTW.
          </p>
        </section>
        <section>
          <h3>Ganhe dinheiro conosco</h3>
          <ul>
            <li>Entre em contato conosco!</li>
            <li>Seja um fornecedor</li>
            <li>Carreiras</li>
          </ul>
        </section>
      </div>
      <div className="all-rights">
        <p>&copy; Fruityvice Team 2020 - 2022. - &reg; Todos os direitos reservados</p>
      </div>
    </footer>
  )
}