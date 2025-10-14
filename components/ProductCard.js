
import Link from 'next/link'
export default function ProductCard({p}){
  return (
    <div className="bg-white shadow rounded p-3 flex flex-col">
      <img src={p.image} className="h-40 w-full object-cover rounded"/>
      <div className="mt-2 font-semibold">{p.name}</div>
      <div className="mt-1 text-green-700 font-bold">{p.priceKES}</div>
      <Link href={`/product/${p.id}`}><a className="mt-auto bg-primary text-white py-2 rounded text-center block mt-3">View</a></Link>
    </div>
  )
}
