import Head from 'next/head'
import Menu from '@/components/menu'
import Layout from '@/components/layout'
import HorizontalLine from '@/components/divider'
import { motion } from 'framer-motion'
import SelectedWorks from '@/components/home/selected'


export default function Home() {
  return (
    <>
    <Layout>
      <Head>
        <title>Sriram Venugopal</title>
        <meta name="description" content="My Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen mx-6 xl:max-w-screen-xl xl:mx-auto lg:grid grid-cols-6 gap-6">
        <div className="col-span-2">
          <Menu />
        </div>

        {/*Page Content */}

        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="col-span-4">
          <header className="mt-20 mb-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-left pb-6"> Inquisitive designer, researcher, 
            artist, and a wanderer.</h1>
            <p className="font-writer text-sm text-gray-600 tracking-tight leading-relaxed">Throughout my career, I have had the opportunity to work on a wide range of products, from mobile apps to enterprise software. 
              My approach to design is holistic and collaborative, and I believe in the power of research and user testing to inform my work.</p>
          </header>

          {/* Case Studies Section */}
            <h2 className="text-2xl tracking-tighter font-medium py-2">Selected <span className="font-extrabold italic">Works</span></h2>
            <HorizontalLine />
            <div className="my-8">  
              <SelectedWorks />
            </div>

          {/* Writing Section */}
        </motion.div>
      </main>
    </Layout>  
    </>
  )
}
