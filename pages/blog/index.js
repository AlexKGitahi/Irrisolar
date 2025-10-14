
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const articles = [
  {id:'drip-vs-sprinkler', title:'Drip vs Sprinkler: Which is Best for Your Farm?', excerpt:'Compare water efficiency, crop fit, and costs — why drip works for most smallholders.', image:'/products/driptape-slit.jpg'},
  {id:'choose-filter', title:'How to Choose the Right Filter for Your Irrigation System', excerpt:'Screen vs disc filters: pick the right one to protect your drippers and pumps.', image:'/products/screen-filter-1.jpg'}
]
export default function Blog(){ return (<div><Head><title>Learn More - Irrisolar</title></Head><Header/>
  <main className='pt-20 max-w-5xl mx-auto p-4'>
    <h1 className='text-2xl font-bold mb-4'>Learn More</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {articles.map(a=>(<a key={a.id} href={'/blog/'+a.id} className='block bg-white rounded shadow overflow-hidden hover:shadow-lg'><img src={a.image} className='w-full h-40 object-cover'/><div className='p-4'><h2 className='font-semibold text-lg text-green-700'>{a.title}</h2><p className='text-gray-700 mt-2'>{a.excerpt}</p><div className='text-green-600 mt-3'>Read more →</div></div></a>))}
    </div>
  </main><Footer/></div>) }
