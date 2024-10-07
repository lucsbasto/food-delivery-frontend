import Image from 'next/image'
import ArrowRight from '../Icons/ArrowRight/ArrowRight'

const Hero = () => {
  return (
    <>
      <section className="flex bg-orange-100 rounded-lg shadow-lg px-10 mt-10 items-center justify-center gap-10">
        <div className="py-20 flex flex-col items-start justify-center px-10 w-full h-full">
          <h1 className="text-6xl font-semibold">
            <span className="font-bold text-">Tudo</span>
            <br />
            fica melhor com <br />
            <span className="font-black text-primary text-8xl">Pizza</span>
          </h1>
          <p className="my-4 text-gray-500 mt-6">
            A fatia que falta para completar cada dia, uma alegria simples, mas
            deliciosa na vida.
          </p>
          <div className="flex gap-4 items-start justify-start">
            <button className="bg-primary text-white px-4 py-2 rounded-full flex gap-2 items-center font-bold hover:bg-secondary">
              Peça Agora
              <ArrowRight />
            </button>
            <button className="flex gap-2 py-2 text-gray-600 font-semibold">
              Saiba Mais
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="w-full h-full justify-center flex items-center sm:">
          <Image
            src={'/hero.png'}
            width={800}
            height={800}
            style={{ maxWidth: '70%', maxHeight: '70%' }}
            alt={'pizza'}
          />
        </div>
      </section>
    </>
  )
}

export default Hero
