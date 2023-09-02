
"use client"
import React, { useRef, useEffect } from 'react';

type ArrowProps = {
    from : string;
    to : string;
}

const Arrow = ({ from, to } : ArrowProps) => {
    const arrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const fromElement = document.getElementById(from);
      const toElement = document.getElementById(to);
  
      if (fromElement && toElement) {
        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();
  
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
  
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        arrow.setAttribute('x1', String(fromRect.left + fromRect.width / 2));
        arrow.setAttribute('y1', String(fromRect.top + fromRect.height / 2));
        arrow.setAttribute('x2', String(toRect.left + toRect.width / 2));
        arrow.setAttribute('y2', String(toRect.top + toRect.height / 2));
        arrow.setAttribute('stroke', '#007BFF');
        arrow.setAttribute('stroke-width', '2');
  
        svg.appendChild(arrow);
        arrowRef.current?.appendChild(svg);
      }
    }, [from, to]);
  
    return (
      <div ref={arrowRef} style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
    );
  };

export default Arrow