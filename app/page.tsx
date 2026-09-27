import { getContent } from '@/lib/content';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

export default function Home() {
  const content = getContent();

  return (
    <div className="flex flex-1 flex-col">
      <Hero hero={content.hero} />
      <About about={content.about} />
      {content.experience && content.experience.items.length > 0 ? (
        <Experience experience={content.experience} />
      ) : null}
      <Projects projects={content.projects} />
      <Skills skills={content.skills} />
      {content.education && content.education.items.length > 0 ? (
        <Education education={content.education} />
      ) : null}
      <Contact contact={content.contact} email={content.about.email} />
    </div>
  );
}
