// import { CoverParticles } from "@/components/CoverParticles"
import { Introduction } from "@/components/introduction"
import { TransitionPage } from "@/components/transition_page"


export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen h-full bg-no-repeat">
        {/* <CoverParticles /> */}
        <Introduction />
      </div>
    </main>
  )
}
