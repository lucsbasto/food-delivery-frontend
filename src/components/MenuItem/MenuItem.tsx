import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuItem = ({ title, description }: any) => {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-100 p-8 rounded-md hover:shadow-md transition-all">
      <Image src={'/pizza.png'} width={300} height={300} alt={'pizza'} />
      <h3 className="text-primary font-bold text-2xl py-3">{title}</h3>
      <p className="text-gray-500 pb-5">{description}</p>
      <button className="bg-primary text-white rounded-full px-4 py-2 max-w-[50%] hover:bg-secondary">
        Adicionar ao carrinho
      </button>
    </div>
  )
}

export default MenuItem
