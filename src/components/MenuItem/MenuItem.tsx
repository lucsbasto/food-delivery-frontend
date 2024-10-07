import Image from 'next/image'

const MenuItem = () => {
  return (
    <div className="bg-orange-100 p-4 rounded-md text-center hover:bg-orange-200 hover:shadow-2xl transition-all">
    <Image src={'/pizza.png'} width={300} height={300} alt={'pizza'}/>
    <h3 className="text-primary font-bold text-2xl py-3">Pizza</h3>
    <p className="text-gray-500 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <button className="bg-primary text-white rounded-full px-4 py-2">Adicionar ao carrinho</button>
  </div>
  )
}

export default MenuItem
