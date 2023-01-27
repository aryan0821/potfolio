import Head from 'next/head'
import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Particles from '../components/Particles.js'
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';
import experiences from '../components/Experiences.json'
import skills from '../components/Skills.json'
import projects from '../components/Projects.json'


const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-[#012] to-[#024] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a2d0fa]/80'>
      <Head>
        <title>Aryan's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <Particles />
      <section id='hero' className="snap-start z-10">
        <Hero />
      </section>
      {/* About */}
      <section id='about' className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className="snap-center">
        <WorkExperience exps={experiences} />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills sks={skills} />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projs={projects} />
      </section>
      {/* Contact */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://coffective.com/wp-content/uploads/2018/06/icon-house-blue.png" alt="Home" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
