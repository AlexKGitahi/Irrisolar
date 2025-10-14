
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import kits from '../../data/kits'
import products from '../../data/products'
import { siteConfig } from '../../config'
export async function getStaticPaths(){ const paths = kits.map(k=>({params:{id:k.id}})); return {paths, fallback:false} }
export async function getStaticProps({params}){ const kit = kits.find(k=>k.id===params.id); return {props:{kit}} }
export default function Kit({kit}){
  const kitProducts = kit.contents.map(id=> products.find(p=>p.id===id)).filter(Boolean)
  return (<div><Head><title>{kit.name} - Irrisolar</title></Head><Header/>
    <main className="pt-20 max-w-3xl mx-auto p-4">
      <div className="bg-white shadow rounded p-4">
        <img src={kit.image} className="w-full h-64 object-cover rounded"/>
        <h1 className="text-xl font-bold mt-3">{kit.name}</h1>
        <div className="text-green-700 font-bold">{kit.price}</div>
        <a href={`https://wa.me/${siteConfig.whatsapp.replace('+','')}?text=I%20want%20the%20${encodeURIComponent(kit.name)}`} className="block mt-3 bg-primary text-white text-center py-2 rounded">Order Kit via WhatsApp</a>
        <div className="bg-green-100 border border-green-300 p-4 rounded-lg shadow mt-6">
          <h3 className="text-lg font-semibold text-green-700 flex items-center"><img src="/mpesa-logo.png" alt="M-Pesa" className="w-6 h-6 mr-2"/>Pay with M-Pesa</h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-800">
            <li><strong>Paybill:</strong> {siteConfig.paybill}</li>
            <li><strong>Account:</strong> {siteConfig.accountName}</li>
            <li><strong>Amount:</strong> {kit.price}</li>
          </ul>
        </div>
        <h3 className="font-bold mt-4">Includes</h3>
        <ul className="list-disc pl-5 mt-2">{kitProducts.map(p=>(<li key={p.id}>{p.name} — {p.priceKES}</li>))}</ul>
      </div>
    </main><Footer/></div>)
}
