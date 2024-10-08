import Image from 'next/image'
import Link from 'next/link'
import { SignInButton } from '../Button/SignIn'
import { SignUpButton } from '../Button/SignUp'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link
        href={''}
        className="flex items-center text-primary font-bold text-2xl "
      >
        Novo Sabor
        <Image src={'/logo.png'} width={50} height={50} alt="logo" />
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>Sobre Nós</Link>
        <Link href={''}>Contato</Link>
      </nav>
      <div className="flex gap-8">
        <SignInButton />
        <SignUpButton />
      </div>
    </header>
  )
}

export default Header
