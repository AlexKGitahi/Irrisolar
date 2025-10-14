
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import products from '../../data/products'
import { siteConfig } from '../../config'

export async function getStaticPaths(){ const paths = products.map(p=>({params:{id:p.id}})); return {paths, fallback:false} }
export async function getStaticProps({params}){ const product = products.find(p=>p.id===params.id); return {props:{product}} }
export default function Product({product}){
  return (<div><Head><title>{product.name} - Irrisolar</title></Head><Header/>
    <main className="pt-20 max-w-3xl mx-auto p-4">
      <div className="bg-white shadow rounded p-4">
        <img src={product.image} className="w-full h-64 object-cover rounded"/>
        <div className="flex justify-between items-center mt-3">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-green-700 font-bold text-lg">{product.priceKES}</div>
        </div>
        <a href={`https://wa.me/${siteConfig.whatsapp.replace('+','')}?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`} className="block mt-3 bg-primary text-white text-center py-2 rounded">Order via WhatsApp</a>
        <div className="mt-4">
          <h3 className="font-bold mb-2">Specifications</h3>
          <table className="w-full text-sm"><tbody>
            {Object.entries(product.specs_obj).map(([k,v])=> (<tr key={k} className="border-t"><td className="py-1 font-semibold">{k}</td><td className="py-1 text-right">{v}</td></tr>))}
          </tbody></table>
        </div>
        <p className="mt-3 text-gray-700">{product.description}</p>

        {/* M-Pesa Paybill block */}
        <div className="bg-green-100 border border-green-300 p-4 rounded-lg shadow mt-6">
          <h3 className="text-lg font-semibold text-green-700 flex items-center"><img src="/mpesa-logo.png" alt="M-Pesa" className="w-6 h-6 mr-2"/>Pay with M-Pesa</h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-800">
            <li><strong>Paybill:</strong> {siteConfig.paybill}</li>
            <li><strong>Account:</strong> {siteConfig.accountName}</li>
            <li><strong>Amount:</strong> {product.priceKES}</li>
          </ul>
        </div>

      </div>
    </main><Footer/></div>)
}
