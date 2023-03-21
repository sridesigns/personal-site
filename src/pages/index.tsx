import Head from 'next/head'
import Menu from '@/components/menu'
import Layout from '@/components/layout'
import HorizontalLine from '@/components/divider'
import { motion } from 'framer-motion'


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

          <motion.div
           initial={{ opacity: 0, y: 500 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.3 }}
           className="col-span-4">
            <header className="my-20">
              <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tighter text-gray-900 text-left pb-6"> Inquisitive designer, researcher, 
              artist, flâneur.</h1>
              <p className="font-writer text-sm text-gray-700 tracking-tight pt-6 leading-relaxed">Throughout my career, I have had the opportunity to work on a wide range of products, from mobile apps to enterprise software. 
                My approach to design is holistic and collaborative, and I believe in the power of research and user testing to inform my work.</p>
            </header>

            {/* Case Studies Section */}
            <div>
              {/**<p className="text-sm font-semibold tracking-widest text-green-600 uppercase font-writer">Case Studies</p>**/}
              <h2 className="text-gray-900 text-3xl tracking-tighter font-semibold py-2">Selected <span className="font-bold italic">Works</span></h2>
              <HorizontalLine />
              <div className="lg:grid grid-cols-2 gap-6 my-6">
                <div className="col-span-1 bg-white border border-gray-200 rounded-2xl">
                  <div className="px-4 pt-4 pb-6">

                    <h4 className="text-base font-bold text-gray-900">Partner Experience Program</h4>
                    <p className="text-sm text-gray-600">Conceptualised and validated an unified reporting experience for Zalando marketing partners.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Writing Section */}
            <div className="flex max-w-screen-lg mx-auto min-h-fit">
              <div className="relative bg-gray-100 rounded-2xl my-8">
                <p className="text-sm font-semibold text-center tracking-widest text-gray-800 uppercase">Recent Writing</p>
                <h2 className="text-gray-900 text-5xl tracking-tighter font-semibold text-center pt-2 pb-10">Some musings on <br />
                life, travel, design, art and tech...</h2>
              </div>
            </div>
          </motion.div>
        </main>
      </Layout>  
    </>
  )
}
