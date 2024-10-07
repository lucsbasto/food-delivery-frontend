import Link from 'next/link'

export function SignUpButton() {
  return (
    <Link href={'/sign-up'}>
      <button className="max-sm:w-full text-sm border border-primary bg-primary text-white hover:bg-secondary hover:text-black p-[8px] px-6  rounded-md">
        Registre-se
      </button>
    </Link>
  )
}
