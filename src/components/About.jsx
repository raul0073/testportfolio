import React, {useEffect} from 'react';
import './../styles/about.scss';
import './../styles/hero.scss';
import html from "../assets/tech/html.png";
import css from "../assets/tech/css-3.png";
import sass from "../assets/tech/sass.png";
import js from "../assets/tech/js.png";
import ts from "../assets/tech/typescript.png";
import cs from "../assets/tech/c-sharp.png";
import py from "../assets/tech/python.png";
import react from "../assets/tech/atom.png";
import angular from "../assets/tech/angular.png";
import aws from "../assets/tech/aws.png";
import jotai from "../assets/tech/jotai.png";
import redux from "../assets/tech/redux.png";
import sql from "../assets/tech/sql-server.png";
import node from "../assets/tech/nodejs.png";
import photoshop from "../assets/tech/photoshop.png";
import figma from "../assets/tech/figma.png";
import flask from "../assets/tech/flask.png";
import mongo from "../assets/tech/mongo.png";
import next from "../assets/tech/next.png";
import git from "../assets/tech/git.png";
import aboutData from './Data/AboutPage/about.json';
import { FaPhoneAlt, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import useIntersectionObserver from './../Observers/Observer';

export const tech = [
  {
    name: "HTML",
    img: html,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "SASS",
    img: sass,
  },
  {
    name: "JS",
    img: js,
  },
  {
    name: "TS",
    img: ts,
  },
  {
    name: "C#",
    img: cs,
  },
  {
    name: "PYTHON",
    img: py,
  },
  {
    name: "REACT",
    img: react,
  },
  {
    name: "ANGULAR",
    img: angular,
  },
  {
    name: "NODE",
    img: node,
  },
  {
    name: "FLASK",
    img: flask,
  },

  {
    name: "FLASK",
    img: mongo,
  },
  {
    name: "SQL",
    img: sql,
  },
  {
    name: "AWS",
    img: aws,
  },
  {
    name: "JOTAI",
    img: jotai,
  },
  {
    name: "REDUX",
    img: redux,
  },
  {
    name: "NEXT",
    img: next
  },
  {
    name: "GIT",
    img: git
  },
  {
    name: "PHOTOSHOP",
    img: photoshop,
  },
  {
    name: "FIGMA",
    img: figma,
  },
];

export default function AboutComp() {

    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.6, 
    });
  
    const [animate, setAnimate] = React.useState(false);
  

    useEffect(() => {
      if (isIntersecting) {
        setAnimate(true);
      }
    }, [isIntersecting]);
  return (
    <section className="about">
      <div className="header">
        <h2 className={animate? `animate` : ''} id='about'>About</h2>
      </div>
      <div className="about-container">
        <div className={`content ${animate? 'content animate' : 'content'}`}  ref={ref}>
          <h2>Freelance web developer</h2>
          <p>{aboutData.about.digging1}</p><br />
          <p>{aboutData.about.digging2}</p>
          <p>{aboutData.about.digging3}</p>
          <p>{aboutData.about.digging4}</p>
          <p>{aboutData.about.digging5}</p>
          <div className="tech-stack">
            <h3>MOST USED TOOLS</h3>
            <br />
            <ul>
              {tech.map((tech, index) => {
                return (
                  <li key={index}>
                    <img src={tech.img} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="actions contact">

            <p>
              &nbsp; <a href="tel:aboutData.about.phone"><FaPhoneAlt /></a>
            </p>
            <p>
            
              &nbsp; <a href="mailto:aboutData.about.mail"><FaEnvelope /></a>
            </p>
          </div>
        </div>
      </div>
    </section >
  );
}
