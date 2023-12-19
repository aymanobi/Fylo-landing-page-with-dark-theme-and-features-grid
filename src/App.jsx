import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"


function App() {

  return (
    <main className="w-full min-h-screen bg-main_background text-White">

      <section className="min-h-screen w-full bg-intro_and_email_sign_up bg-bg-mobile lg:bg-bg-desktop bg-no-repeat bg-contain bg-bottom ">
        <Header />
        <Hero />
      </section>

      <Services />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  )
}

export default App
