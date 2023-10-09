import React, { useEffect } from "react";
import { Chrono } from "react-chrono";
import useIntersectionObserver from "../Observers/Observer";
import experienceData from './Data/ExperiencePage/experience.json'
import './../styles/experience.scss';

export default function ExperienceComp() {

    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.3, 
      });
    
      const [animate, setAnimate] = React.useState(false);
    
  
      useEffect(() => {
        if (isIntersecting) {
          setAnimate(true);
        }
      }, [isIntersecting]);
  const customContent = [

    <div className="projectDetails">
      <ul>
        <li>
          Lereava - (לראווה) Window cleaners professionals.
        </li>
        <li>Local synagogue management system</li>
        <li>Talshir IBC - International patent comapny</li>
      </ul>
    </div>,
        <div className="projectDetails">
        <ul>
          <li>
          Managing all employees (263)
          </li>
          <li>Managing smart traffic flow (1.5k pd)</li>
          <li>Daily communication with shareholders</li>
        </ul>
      </div>,
          <div className="projectDetails">
          <ul>
            <li>
            Build a website with Wix
            </li>
            <li>Advertising and marketing</li>
          </ul>
        </div>,
            <div className="projectDetails">
            <ul>
              <li>Apartments, vehicles & POS</li>
              <li>POS Admin</li>
            </ul>
          </div>,
  ];

  return (
    <div className="timeline">
        <div className="header">
            <h2 className={animate? 'animate ex' : ""} id="experience">
                Experience
            </h2>
        </div>
      <div className={animate? "wrapper animate" : "wrapper"} ref={ref}>
        <Chrono
          items={experienceData.experience}
          controls="none"
          mode="VERTICAL_ALTERNATING"
          cardHeight={150}
          classNames={{
            cardText: "card-text",
            cardSubTitle: "card-subtitle",
            cardDetailedText: "card-detailed",
            controls: "my-controls",
            card: "my-card",
          }}
          theme={{
            primary: "gray",
            secondary: "orange",
            cardBgColor: "#424242",
            cardTitleColor: "orange",
            cardForeColor: "white",
            cardDetailedTextColor: "white",
            titleColor: "teal",
            titleColorActive: "white",
          }}
        >
          {customContent}
        </Chrono>
      </div>
    </div>
  );
}
