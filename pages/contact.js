import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '../config'
export default function Contact(){return (<div><Header/><main className='pt-20 max-w-3xl mx-auto p-4'><h1 className='text-2xl font-bold mb-2'>Contact</h1><p>WhatsApp: {siteConfig.whatsapp}</p><p>Email: {siteConfig.email}</p><p>Visit: Kenol, Kenya</p></main><Footer/></div>)}
