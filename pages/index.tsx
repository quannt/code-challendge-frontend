import Head from 'next/head'
import TipContainer from '../components/tipContainer'
import { Tip } from '../models/tip'
import { data } from './api/tips'

export default function Home({ tips }: { tips: Tip[] }) {
  return (
    <div>
      <Head>
        <title>Coding challenge: Frontend - Maybe - Ngo Tung Quan's submission</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full my-8 text-center">
        <section>
          <h1 className="text-2xl leading-8 font-black font-display">UI Engineer</h1>
          <h1 className="text-2xl leading-8 font-black font-display mb-4">Coding Challenge</h1>
          <h2 className="text-sm leading-4 text-gray font-body mb-12">by Maybe Labs</h2>
        </section>

        <section>
        {tips.map((tip) => (
         <TipContainer className="mb-4" key={tip.id} tip={tip}></TipContainer>
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

