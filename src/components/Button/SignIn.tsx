import Link from 'next/link'

export function SignInButton() {
  return (
    <Link href={'/sign-in'}>
      <button className="max-sm:w-full text-sm border border-primary bg-primary text-white hover:bg-secondary hover:text-white p-[8px] px-6  rounded-md">
        Login
      </button>
    </Link>
  )
}
