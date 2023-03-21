import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import Menu from "@/components/menu";
import { GetBlog, GetBlogSlug } from "@/graphql/data/posts/blog";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { motion } from "framer-motion";
import HorizontalLine from "@/components/divider";
import Back from "@/components/back";



export async function getStaticPaths() {
  const data = await GetBlogSlug()
  const slugs = data.blogs

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await GetBlog(params.slug)

  return {
    revalidate: 60,
    props: {
      blog: post.blogs[0],
      //content: await serialize(post.blogs[0].body.markdown, {
      //  mdxOptions: { development: false },
      //})
    },
  }
}

export default function BlogDetail({ blog, content }) {
  console.log(blog);

  return (
    <Layout>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="" />
      </Head>

        <main className="max-w-screen mx-6 xl:max-w-screen-xl xl:mx-auto lg:grid grid-cols-6 gap-6">
          <div className=" col-span-2">
            <Menu />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-4 my-20">
            <div>
              <Link href="/life">
                <Back />
              </Link>
            </div>
            <header className="space-y-4 pb-4">
              <h2 className="text-4xl text-gray-900 font-extrabold tracking-tighter">{blog.title}</h2>
              <p className="text-base text-gray-700 font-writer tracking-tight">{blog.excerpt}</p>
              <div className="flex space-x-2 align-middle">
                <p className="text-gray-500 text-sm font-writer">{new Date(blog.publishedAt).toLocaleDateString()}</p>
              </div>
            </header>
            <HorizontalLine />
            <div className="my-10 max-w-none prose prose-sm prose-headings:font-extrabold prose-headings:tracking-tight
                prose-p:font-writer prose-p:text-gray-700 prose-p:leading-relaxed prose-p:tracking-tight
                prose-ul:font-writer prose-ol:font-writer prose-ul:text-gray-700 prose-strong:font-semibold
                prose-a:text-blue-600 hover:prose-a:underline prose-a:no-underline hover:prose-a:font-bold  
                prose-blockquote:bg-violet-50 prose-blockquote:border prose-blockquote:border-violet-200
                prose-blockquote:rounded-md prose-blockquote:p-4 prose-blockquote:text-sm prose-blockquote:text-gray-700">
            <RichText content={blog.body.raw.children} />
            </div>
          </motion.div>  
        </main>
    </Layout>
  )
}