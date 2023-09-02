
"use client"
import React, { useRef, useEffect} from 'react'
import {select } from "d3";
import { join } from 'path';

const data = [25,30,45,60,20]

function d3test() {
    const svgref = useRef();

    useEffect(() => {
        const svg = select(svgref.current);

        svg
            .selectAll("circle")
            .data(data)
            .join(
                enter => enter.append("circle"),
                update => update.attr("class", "update"),
                exit => exit.remove()
            )
                .attr("r", value => value)
                .attr("cx", value => value * 3)
                .attr("cy", value => value * 3)
                .attr("stroke", "red");
    }, [])

    return (
        <svg ref={svgref} width={400} height={400}>
        </svg>
    )
}

export default d3test