import React, { useState, useEffect, useRef } from "react";
import { techIcons } from "./../assets/TechSvgs.jsx";
import { FaGithub, FaLink } from "react-icons/fa";

import './../styles/projectBox.scss';
import useIntersectionObserver from "../Observers/Observer.jsx";

export default function ProjectBox({ project }) {
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const [isBoxBack, setIsBoxBack] = useState(false)
  const [isBoxIntersecting, setIsBoxIntersecting] = useState(false)

  const [projectBoxRef, isProjectBoxIntersecting] = useIntersectionObserver({
    threshold: 0.9,
  });

  const handleClick = () => {
    if (isBoxBack) {
      setIsBoxBack(!isBoxBack)
      setTimeout(() => {
        setIsBoxClicked(!isBoxClicked)
      }, 400)
    } else {
      setIsBoxClicked(!isBoxClicked)
      setIsBoxBack(!isBoxBack)
    }
  }

  useEffect(() => {
    if (isProjectBoxIntersecting) {
      setIsBoxIntersecting(!isBoxIntersecting)
    }
  }, [isProjectBoxIntersecting])

  return (

    <div className={isBoxIntersecting ? "content box animate" : "content box"} onClick={handleClick} ref={projectBoxRef} >
      <div
        className="front"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      >
      </div>

      {isBoxClicked &&
        (
          <div className={!isBoxBack ? 'back destroy' : "back"}>

            <h2>{project.name}</h2>
            <div className="tools">
              <div className="left">
                <h3>Main Tools</h3>
                <ul>
                  {project.tech.map((techName, index) => (
                    <li key={index}>{techIcons[techName]}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="description">
              <h3>Project Description</h3>
              <small>{project.description}</small>
            </div>

            <div className="actions">
              <FaGithub />

              <FaLink
                target="_blank"
                onClick={() => (location.href = `${project.url}`)}
              />
            </div>
          </div>
        )}
    </div>

  );
}
