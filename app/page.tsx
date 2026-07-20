import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import MusicSection from '@/components/MusicSection'
import AboutSection from '@/components/AboutSection'
import FeaturedSection from '@/components/FeaturedSection'
import ThemesSection from '@/components/ThemesSection'
import TimelineSection from '@/components/TimelineSection'
import VideosSection from '@/components/VideosSection'
import SocialSection from '@/components/SocialSection'
import BookingSection from '@/components/BookingSection'
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
        <FeaturedSection />
        <ThemesSection />
        <TimelineSection />
        <VideosSection />
        <SocialSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  )
}
