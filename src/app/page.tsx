import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Solutions from "@/components/sections/solutions"
import Process from "@/components/sections/process"
import Testimonials from "@/components/sections/testimonials"
import Pricing from "@/components/sections/pricing"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Solutions />
      <Process />
      <Testimonials />
      <Pricing />
    </main>
  )
}
