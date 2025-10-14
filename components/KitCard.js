
import Link from 'next/link'
export default function KitCard({k}){
  return (
    <div className="bg-white shadow rounded p-4">
      <img src={k.image} className="h-40 w-full object-cover rounded"/>
      <div className="mt-2 font-semibold">{k.name}</div>
      <div className="mt-1 text-green-700 font-bold">{k.price}</div>
      <Link href={`/kits/${k.id}`}><a className="mt-3 inline-block bg-primary text-white py-2 px-4 rounded">View Kit</a></Link>
    </div>
  )
}
