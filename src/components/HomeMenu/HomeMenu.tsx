import MenuItem from '../MenuItem/MenuItem'
import SectionHeader from '../SectionHeader/SectionHeader'

const menuItens = [
  {
    title: 'Margherita',
    description:
      'Uma pizza clássica italiana que combina molho de tomate fresco, queijo mozzarella derretido e folhas de manjericão. O toque de azeite extra virgem realça os sabores naturais, tornando-a uma escolha leve e refrescante.',
  },
  {
    title: 'Pepperoni',
    description:
      'Esta pizza é um verdadeiro ícone das pizzarias. Com uma base de molho de tomate e queijo mozzarella, é coberta com fatias generosas de pepperoni, que ao serem assadas ficam crocantes e liberam um sabor picante e irresistível.',
  },
  {
    title: 'Quatro Queijos',
    description:
      'Uma deliciosa mistura de queijos como mozzarella, gorgonzola, parmesão e provolone, derretidos sobre uma base de molho de tomate. Cada mordida oferece uma combinação rica e cremosa que vai agradar aos amantes de queijo.',
  },
  {
    title: 'Frango com Catupiry',
    description:
      'Uma combinação irresistível de frango desfiado temperado, cremoso catupiry, cebola caramelizada e azeitonas. Essa pizza é perfeita para quem busca um sabor mais robusto e uma textura cremosa em cada fatia.',
  },
  {
    title: 'Vegetariana',
    description:
      'Repleta de frescor, esta pizza é coberta com uma variedade colorida de legumes, incluindo pimentões crocantes, cebola roxa, azeitonas pretas, cogumelos suculentos e espinafre. Uma opção saudável que não compromete o sabor.',
  },
  {
    title: 'Calabresa',
    description:
      'Com um molho de tomate rico e queijo mozzarella como base, esta pizza é generosamente coberta com fatias finas de linguiça calabresa e cebolas. O resultado é um prato com um sabor defumado intenso que conquista qualquer paladar.',
  },
]

const HomeMenu = () => {
  return (
    <section className="py-5">
      <SectionHeader title={'Menu'} />
      <div className="grid grid-cols-3 gap-12">
        {menuItens.map((item, index) => {
          return (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default HomeMenu
