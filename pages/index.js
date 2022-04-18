import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  console.log(`prefix='${process.env.PREFIX}'`)
  return (
    <div>
      <Head>
        <title>fbclone</title>
        <meta name="description" content="a clone of fb" />
        <link rel="icon" href={process.env.PREFIX + "/favicon.ico"} />
      </Head>
      <Header />
      <main>
{/* SideBar */}
{/* Feed */}
{/* Widgets */}
      </main>
    </div>
  )
}
