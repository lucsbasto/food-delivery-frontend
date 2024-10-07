import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import HomeMenu from '@/components/HomeMenu/HomeMenu'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <About />
      <Footer />
    </>
  )
}
