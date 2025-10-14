
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import products from '../data/products'
import kits from '../data/kits'
import ProductCard from '../components/ProductCard'
import KitCard from '../components/KitCard'
export default function Home(){
  const featured = products.slice(0,4)
  return (<div><Head><title>Irrisolar</title></Head><Header/>
  <main className="pt-20 max-w-5xl mx-auto p-4">
    <section className="bg-primary text-white rounded-lg p-6">
      <h1 className="text-2xl font-bold">Smart Irrigation for Kenyan Farmers</h1>
      <p className="mt-2">Durable layflat, quality drip tape & fittings — built for local farms.</p>
      <div className="flex gap-3 mt-4">
        <a href="/shop" className="flex-1 bg-white text-primary py-2 px-3 rounded text-center font-semibold">Shop Drip Tape</a>
        <a href="#kits" className="flex-1 bg-green-700 py-2 px-3 rounded text-center font-semibold">Get a Kit Quote</a>
      </div>
    </section>
    <section className="mt-6">
      <h2 className="text-xl font-bold mb-3">Featured Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featured.map(p=>(<ProductCard key={p.id} p={p}/>))}
      </div>
    </section>
    <section id="kits" className="mt-8">
      <h2 className="text-xl font-bold mb-3">Kits for Farmers</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {kits.map(k=>(<KitCard key={k.id} k={k}/>))}
      </div>
    </section>
  </main><Footer/>
  <a href="https://wa.me/254700000000" className="fixed right-4 bottom-4 bg-secondary w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">💬</a>
  </div>)
}
