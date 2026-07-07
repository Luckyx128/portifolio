import { PrefsProvider } from "@/components/prefs";
import { TopBar } from "@/components/top-bar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Production } from "@/components/production";
import { BuildingNow } from "@/components/building-now";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <PrefsProvider>
      <div className="container">
        <TopBar />
        <main>
          <Hero />
          <About />
          <Production />
          <BuildingNow />
          <Stack />
          <Contact />
        </main>
      </div>
    </PrefsProvider>
  );
}
