import Head from "next/head";
import Layout from "@/components/layout";
import Header from "@/components/menu";
import History from "@/components/work/history";
import Archives from "@/components/archives";
import HorizontalLine from "@/components/divider";
import { GetWork } from "@/graphql/data/projects";
import { motion } from "framer-motion";

interface Props {
  work: string
}

export async function getStaticProps() {
  const work = await GetWork()


  return {
    //This data is slightly dynamic, so we'll update it every hour.
    revalidate: 60 * 60,
    props: { 
      work,
    },
  }
}

export default function Work({ work}: Props) {
  console.log(work);

  return (
    <Layout>
      <Head>
        <title>Work &middot; Sri</title>
        <link rel="icon" href="/favicons/alien.png" />
      </Head>

      <main className="max-w-screen mx-6 xl:max-w-screen-xl xl:mx-auto lg:grid grid-cols-6 gap-6">
        <div className=" col-span-2">
          <Header />
        </div>
        <motion.div
           initial={{ opacity: 0, y: 500 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4 }}
           className="col-span-4 my-20">
          <header className="space-y-4 pb-10">
            <h1 className="text-4xl font-extrabold pb-4 tracking-tighter">Work &middot; Professional Highlights</h1>
            <History />
          </header>

          {/* Recent Work 

          <div className="pb-20">
              <h2 className="text-2xl font-semibold tracking-tight pb-2">Recent <span className="italic font-extrabold">Work</span></h2>
              <HorizontalLine />
              <Recents work={work}  />
          </div>*/}

          {/* From the Archives */}

          <div>
              <h2 className="text-2xl font-semibold tracking-tight pb-2">From the&nbsp;<span className="italic font-extrabold">Archives</span></h2>
              <HorizontalLine />
              <Archives work={work} />
          </div>

        </motion.div>
      </main>
    </Layout>
  )
}