import Head from 'next/head'
import Menu from '@/components/menu'
import Layout from '@/components/layout'


export default function Home() {
  return (
    <>
        <Layout>
            <Head>
                <title>Sri &middot; Works</title>
                <meta name="description" content="Case Studies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="max-w-screen mx-6 lg:max-w-screen-md lg:mx-auto">
                <div>
                </div>
            </main> 
        </Layout>
    </>)
}    
