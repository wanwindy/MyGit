import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Insights } from '@/components/sections/Insights';
import { Articles } from '@/components/sections/Articles';
import { Journey } from '@/components/sections/Journey';
import { articles } from '@/data/articles';
import { insights } from '@/data/insights';
import { projects } from '@/data/projects';
import { journeyTimeline } from '@/data/journey';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Insights insights={insights} />
        <Articles articles={articles} />
        <Journey items={journeyTimeline} />
      </main>
      <Footer />
    </>
  );
}
