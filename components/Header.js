
import Link from 'next/link'
export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary text-white shadow z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-3">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img src="/products/logo.png" alt="logo" className="w-8 h-8 rounded bg-white p-1"/>
          Irrisolar
        </div>
        <nav className="flex gap-4 text-sm">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/shop"><a className="hover:underline">Shop</a></Link>
          <Link href="/kits"><a className="hover:underline">Kits</a></Link>
          <Link href="/blog"><a className="hover:underline">Learn More</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
