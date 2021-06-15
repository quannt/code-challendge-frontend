import Head from 'next/head'
import TipContainer from '../components/tipContainer'
import { Tip } from '../models/tip'
import { data } from './api/tips'

export default function Home({ tips }: { tips: Tip[] }) {
  return (
    <div>
      <Head>
        <title>Coding challenge: Frontend - Maybe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full my-8 text-center">
        <section>
          <h1>UI Engineer Coding Challenge</h1>
          <h2>by Maybe Labs</h2>
        </section>

        <section>
        {tips.map((tip) => (
         <TipContainer tip={tip}></TipContainer>
        ))}
        </section>
      </main>
    </div>
  )
}


export function getStaticProps() {
  const tips = data

  return {
    props: {
      tips,
    },
  }
}
