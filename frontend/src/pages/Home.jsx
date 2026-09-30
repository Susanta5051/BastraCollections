import { lazy,Suspense } from 'react'
import Hero from '../components/Hero.jsx'
import Policy from '../components/Policy'
import NewsletterBox from '../components/NewsLetterBox.jsx'

const BestSeller = lazy(()=>import('../components/BestSeller'))
const LatestCollections = lazy(()=>import('../components/LatestCollections'))

const Home = () => {
  return (
    <div>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}><LatestCollections /></Suspense>
        <Suspense fallback={<div>Loading...</div>} ><BestSeller /></Suspense>
        <Policy />
        <NewsletterBox/>
    </div>
  )
}
 
export default Home


