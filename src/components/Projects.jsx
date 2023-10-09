import projectsData from './Data/ProjectsPage/projects.json';
import ProjectBox from './ProjectBox';
import './../styles/projects.scss';
import useIntersectionObserver from './../Observers/Observer';
import React, { useEffect } from 'react';


export default function ProjectsComp() {
  const projects = projectsData.projects;

  const [headerRef, isHeaderIntersecting] = useIntersectionObserver({
    threshold: 0.8,
  });

  const [boxRef, isBoxIntersecting] = useIntersectionObserver({
    threshold: 0.8,
  });

  const [animateHeader, setAnimateHeader] = React.useState(false);
  const [animateBox, setAnimateBox] = React.useState(false);
  
  useEffect(() => {
    if (isHeaderIntersecting) {
      setAnimateHeader(true);
    }
  }, [isHeaderIntersecting]);

  useEffect(() => {
    if (isBoxIntersecting) {
      setAnimateBox(true);
    }
  }, [isBoxIntersecting]);

  return (
    <section className="projects">
      <div className="header">
        <h2 className={animateHeader ? 'animate' : ''} ref={headerRef} id='projects'>
          Projects
        </h2>
      </div>
      <div className={`projectBox`} >
        {projects.map((proj, index) => {
          return  <ProjectBox project={proj} key={index}/>

        })}
      </div>
    </section>
  );
}
