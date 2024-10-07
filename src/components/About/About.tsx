import SectionHeader from '../SectionHeader/SectionHeader'

const About = () => {
  return (
    <div className="m-auto bg-orange-50 w-full px-[200px] py-20">
      <SectionHeader title="Sobre Nós" />
      <p className="px-20 text-gray-600 text-2xl mx-auto text-center">
        Bem-vindo à <span className="font-bold text-primary">Novo Sabor</span>.
        Na nossa pizzaria, a paixão pela culinária se encontra com a tradição
        italiana. Desde o nosso início, temos nos dedicado a oferecer pizzas
        artesanais feitas com ingredientes frescos e de alta qualidade. Cada
        pizza é uma obra-prima, cuidadosamente preparada por nossos chefs
        experientes que seguem receitas autênticas, garantindo sabores que vão
        além do comum.
      </p>
      <br />
      <p className="px-20 text-gray-600 text-2xl mx-auto text-center">
        Fundada em 2023 a{' '}
        <span className="font-bold text-primary">Novo Sabor</span> nasceu do
        amor por compartilhar momentos especiais em torno de uma boa comida.
        Inspirados pelas tradições familiares e pela rica cultura italiana,
        buscamos criar um ambiente acolhedor onde amigos e famílias possam se
        reunir para desfrutar de uma experiência gastronômica única. Acreditamos
        que a qualidade dos ingredientes é fundamental para criar pizzas
        deliciosas. Por isso, selecionamos cuidadosamente cada item do nosso
        menu. Desde os tomates frescos e ervas aromáticas até os queijos
        artesanais, cada ingrediente é escolhido com atenção, garantindo que
        cada mordida seja repleta de sabor.
      </p>
      <br />
      <p className="px-20 text-gray-600 text-2xl mx-auto text-center">
        Na <span className="font-bold text-primary">Novo Sabor</span>, não
        apenas servimos pizza; nós criamos experiências. Estamos comprometidos
        em oferecer um atendimento excepcional e um ambiente acolhedor para
        todos os nossos clientes. Seja para um jantar em família, uma celebração
        especial ou uma refeição rápida, estamos aqui para tornar cada visita
        memorável.
      </p>
    </div>
  )
}

export default About
