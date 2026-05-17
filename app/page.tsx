import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import MusicSection from '@/components/MusicSection'
import AboutSection from '@/components/AboutSection'
import AlbumSection from '@/components/AlbumSection'
import ShowsSection from '@/components/ShowsSection'
import ConnectSection from '@/components/ConnectSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="ticker-section">
          <Ticker />
        </div>
        <MusicSection />
        <AboutSection />
        <AlbumSection />
        <ShowsSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  )
}
