
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import products from '../../data/products'
import ProductCard from '../../components/ProductCard'
export default function Shop(){ return (<div><Head><title>Shop - Irrisolar</title></Head><Header/>
  <main className="pt-20 max-w-5xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Shop</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">{products.map(p=>(<ProductCard key={p.id} p={p}/>))}</div>
  </main><Footer/></div>) }
