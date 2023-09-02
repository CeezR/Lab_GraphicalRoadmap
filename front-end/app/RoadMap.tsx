"use client"


import React from "react";

import { ArcherContainer, ArcherElement } from "react-archer";

const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "100px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = { padding: "10px", border: "1px solid black" };

const RoadMap = () => {
  return (
    <div>
      <ArcherContainer strokeColor="red">
        <div style={rootStyle}>
          <ArcherElement
            id="root"
            relations={[
              {
                targetId: "element2",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
              {
                targetId: "element3",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
              {
                targetId: "element4",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
            ]}
          >
            <div style={boxStyle}>Fullstack Java Developer</div>
          </ArcherElement>
        </div>

        <div style={rowStyle}>
          <ArcherElement id="element2">
            <div style={boxStyle}>Front-end</div>
          </ArcherElement>

          <ArcherElement id="element3"             
          relations={[
              {
                targetId: "element5",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
            ]}>
            <div style={boxStyle}>Back-end</div>
          </ArcherElement>

          <ArcherElement id="element4">
            <div style={boxStyle}>Database</div>
          </ArcherElement>
        </div>

        <div style={rootStyle}>
            <ArcherElement id="element5">
            <div style={boxStyle}>Java Introduction</div>
          </ArcherElement>
        </div>

      </ArcherContainer>
    </div>
    
    // <section className="roadMap">
    //   {/* <div>FullStack Web Develoer</div>
    //     <div>Front-end</div>
    //     <div>html</div>
    //     <div>CSS</div>
    //     <div>JavaScript</div>
    //     <div>Back-end</div>
    //     <div>
    //         Introduction to Java
    //     </div>
    //     <div>
    //         Advanced Java
    //     </div>
    //     <div>Database</div>
    //     <div>SQL</div>
    //     <div>MongoDB</div> */}
    // </section>
  );
};

export default RoadMap;
