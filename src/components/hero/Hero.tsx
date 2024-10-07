import Image from "next/image"
import ArrowRight from "../icons/arrow-right/ArrowRight"

const Hero = () => {
  return (
    <>
    <section className="flex items-center justify-center gap-10">
      <div className="py-20 max-h-full max-w-full">
        <h1 className="text-6xl font-semibold">
          <span className="font-bold text-">Tudo</span><br/> 
          fica melhor com <br/> 
          <span className="font-black text-primary text-8xl">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 mt-6">A fatia que falta para completar cada dia, uma alegria simples, mas deliciosa na vida.</p>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-full flex gap-2 items-center font-bold hover:bg-red-600">
            Peça Agora
            <ArrowRight/>
            </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Saiba Mais
            <ArrowRight/>
          </button>
        </div>
      </div>
      <div className="w-full h-full justify-center flex items-center">
        <Image src={'/pizza.png'} width={2000} height={2000} style={{maxWidth: '70%', maxHeight: '70%'}} alt={'pizza'}/>
      </div>
    </section>
    <div className="bg-gray-200 w-full h-1 rounded-full"></div>
    </>
  )
}

export default Hero
