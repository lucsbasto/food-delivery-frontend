import Image from "next/image"

const Hero = () => {
  return (
    <section>
      <h1>Everything is better with Pizza</h1>
      <p>Pizza is the missing piece that makes every day complete, a simples yet delicious joy in life</p>
      <Image src={'/pizza.png'} layout="fill" objectFit="contain" alt={'pizza'}/>
    </section>
  )
}

export default Hero
