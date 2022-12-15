import Head from 'next/head'

import Header from '../components/header'
import Hero from '../components/hero'
import Faq from '../components/faq'
import Timeline from '../components/timeline'
import Cta from '../components/cta'
import Events from '../components/events'
import Testimonials from '../components/testimonials'
import Twitter from '../components/twitter'
import Footer from '../components/footer'

export default function Home({ events }) {

  return (
    <>
      <Head>
        <title>Welcome to FitDevs</title>
        <meta name="description" content="FitDevs was created to empower developers to explore, maintain, and inspire an overall goal of fitness in our collective lives." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32.png" />
        <link rel="icon" href="/favicon-128.png" />
        <link rel="icon" href="/favicon-180.png" />
        <link rel="icon" href="/favicon-192.png" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Faq />
        <Timeline />
        <Cta />
        <Events events={events} />
        <Testimonials />
        <Twitter />
      </main>
      <Footer />
    </>
  )
}


export async function getStaticProps() {
  const url = `https://discord.com/api/v10/guilds/${process.env.GUILD_ID}/scheduled-events`
  const options = {
      method: 'GET',
      headers: {
          'Authorization': `Bot ${process.env.BOT_TOKEN}`,
          'User-Agent': 'DiscordBot'
      }
  }

  const res = await fetch(url, options);
  const events = await res.json();

  // console.log(events);

  return {
      props: {
          events
      },
  }
}