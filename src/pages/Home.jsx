import React from 'react'
import TopbarComp from '../components/Topbar'
import NavbarComp from '../components/Navbar'
import HeroComp from '../components/Hero'
import AboutComp from '../components/About'
import 'font-awesome/css/font-awesome.min.css';
import ParallexComp from '../components/Parallex'
import ProjectsComp from '../components/Projects'
import ExperienceComp from '../components/Experience'
import FooterComp from '../components/Footer'
import { BrowserRouter } from 'react-router-dom'
import './../styles/home.scss';
import { useAtom } from 'jotai'
import { themeNow } from '../Atoms/Atoms'

export default function Home() {
  const [theme, setTheme] = useAtom(themeNow)

  return (
    <section className={theme === 'dark' ? 'bg dark' : 'bg light'}>
      <BrowserRouter>
        <NavbarComp />
        <HeroComp />
        <ParallexComp />
        <AboutComp/>
        <ParallexComp />
        <ProjectsComp />
        <ExperienceComp />
        <FooterComp />
      </BrowserRouter>
    </section>
  )
}
