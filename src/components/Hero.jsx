import React from "react";
import "../styles/hero.scss";
import { useInView } from "react-intersection-observer";
import { useAtom } from 'jotai'
import { themeNow } from '../Atoms/Atoms'


export default function HeroComp() {
  const [theme, setTheme] = useAtom(themeNow)

  const [ref, inView] = useInView({
    threshold: 0.5
  })

  return (
    <section ref={ref} className={`hero ${inView ? '' : 'destroy'}`} >
      <div className="hero-container">
        <div className={theme === 'dark' ? 'content' : 'content light'}>
          <div className="left">
            <img
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              alt=""
            />
          </div>
          <div className="right">
            <h1>
              Raz Massami
            </h1>
            <div class="wrapper">
              <svg>
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                  FULL STACK DEVELOPER
                </text>
              </svg>
            </div>
            <button>Hire me</button>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <span><a href="#about">	&darr;</a></span>
      </div>
    </section>
  );
}
