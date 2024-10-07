import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href={''} className="text-primary font-bold text-2xl ">Novo Sabor</Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>Sobre Nós</Link>
          <Link href={''}>Contato</Link>
        </nav>
      <div className="flex gap-8">
        <Link href={''} className="bg-primary text-white px-8 py-2 rounded-full hover:bg-red-600">Login</Link>
        <Link href={''} className="bg-primary text-white px-8 py-2 rounded-full hover:bg-red-600">Registre-se</Link>
      </div>
      </header>
  )
}

export default Header
