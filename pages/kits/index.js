
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import kits from '../../data/kits'
import KitCard from '../../components/KitCard'
export default function Kits(){ return (<div><Head><title>Kits - Irrisolar</title></Head><Header/>
  <main className="pt-20 max-w-5xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Kits by Acreage</h1>
    <div className="grid sm:grid-cols-2 gap-4">{kits.map(k=>(<KitCard key={k.id} k={k}/>))}</div>
  </main><Footer/></div>) }
