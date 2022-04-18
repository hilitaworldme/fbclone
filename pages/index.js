import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>fbclone</title>
        <meta name="description" content="a clone of fb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

      </main>
    </div>
  )
}
