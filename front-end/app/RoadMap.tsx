"use client";
import React, { useState } from "react";
import IndentedTree from "./IndentedTree";
import RadialClusterTree from "./RadialClusterTree";
import TreeChart from "./TreeChart";
import TreeChartHorizontal from "./TreeChartHorizontal";
import TreeDiagram from "./TreeDiagram";

const initialData = {
  name: "Fullstack Developer",
  children: [
    {
      name: "Frontend Development",
      children: [
        {
          name: "HTML/CSS",
          children: [
            {
              name: "HTML5",
              children: [],
            },
            {
              name: "CSS3",
              children: [],
            },
            {
              name: "Responsive Design",
              children: [],
            },
          ],
        },
        {
          name: "JavaScript",
          children: [
            {
              name: "React",
              children: [],
            },
            {
              name: "Angular",
              children: [],
            },
            {
              name: "Vue.js",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Backend Development",
      children: [
        {
          name: "Server-Side Language",
          children: [
            {
              name: "Node.js",
              children: [],
            },
            {
              name: "Python (Flask/Django)",
              children: [],
            },
            {
              name: "Java (Spring Boot)",
              children: [],
            },
          ],
        },
        {
          name: "API Development",
          children: [
            {
              name: "RESTful API design",
              children: [],
            },
            {
              name: "GraphQL",
              children: [],
            },
          ],
        },
        {
          name: "Databases",
          children: [
            {
              name: "SQL",
              children: [],
            },
            {
              name: "NoSQL (MongoDB, Redis)",
              children: [],
            },
          ],
        },
        {
          name: "Authentication & Authorization",
          children: [
            {
              name: "Passport.js",
              children: [],
            },
            {
              name: "OAuth 2.0",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const enhancedDummyData = {
  name: "Fullstack Developer",
  children: [
    {
      name: "Frontend Development",
      children: [
        {
          name: "HTML/CSS",
          children: [
            {
              name: "HTML5",
              children: [
                {
                  name: "Learn the basics of HTML tags and structure",
                  value: 10,
                },
                {
                  name: "Understand semantic HTML and its importance",
                  value: 8,
                },
                {
                  name: "Explore HTML5 elements like <canvas>, <video>, and <audio>",
                  value: 12,
                },
              ],
            },
            {
              name: "CSS3",
              children: [
                {
                  name: "Learn CSS selectors and properties",
                  value: 10,
                },
                {
                  name: "Study CSS box model, layout, and positioning",
                  value: 12,
                },
                {
                  name: "Dive into CSS Flexbox and CSS Grid for advanced layouts",
                  value: 14,
                },
              ],
            },
            {
              name: "Responsive Design",
              children: [
                {
                  name: "Learn responsive web design principles",
                  value: 8,
                },
                {
                  name: "Implement media queries to make your websites mobile-friendly",
                  value: 10,
                },
                {
                  name: "Study frameworks like Bootstrap and Foundation for responsive design",
                  value: 12,
                },
              ],
            },
          ],
        },
        {
          name: "JavaScript",
          children: [
            {
              name: "Basic JavaScript",
              children: [
                {
                  name: "Master JavaScript fundamentals like variables, data types, and operators",
                  value: 10,
                },
                {
                  name: "Learn about control flow (if statements, loops) and functions",
                  value: 10,
                },
              ],
            },
            {
              name: "Intermediate JavaScript",
              children: [
                {
                  name: "Understand asynchronous programming with Promises and async/await",
                  value: 12,
                },
                {
                  name: "Study ES6+ features like arrow functions, classes, and destructuring",
                  value: 10,
                },
              ],
            },
            {
              name: "React",
              children: [
                {
                  name: "Learn React's component-based architecture",
                  value: 16,
                },
                {
                  name: "Create interactive UIs with React",
                  value: 14,
                },
                {
                  name: "Explore state management with Redux or Context API",
                  value: 12,
                },
              ],
            },
            {
              name: "Angular",
              children: [
                {
                  name: "Get started with Angular components and templates",
                  value: 14,
                },
                {
                  name: "Learn about Angular modules, services, and dependency injection",
                  value: 12,
                },
              ],
            },
            {
              name: "Vue.js",
              children: [
                {
                  name: "Understand Vue's reactivity system",
                  value: 12,
                },
                {
                  name: "Create Vue components and use Vue Router for routing",
                  value: 10,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Backend Development",
      children: [
        {
          name: "Server-Side Language",
          children: [
            {
              name: "Node.js",
              children: [
                {
                  name: "Learn about Node.js event loop and asynchronous programming",
                  value: 14,
                },
                {
                  name: "Create RESTful APIs using Express.js",
                  value: 16,
                },
              ],
            },
            {
              name: "Python (Flask/Django)",
              children: [
                {
                  name: "Get familiar with Flask or Django web frameworks",
                  value: 12,
                },
                {
                  name: "Build web applications and RESTful APIs",
                  value: 18,
                },
              ],
            },
            {
              name: "Java (Spring Boot)",
              children: [
                {
                  name: "Study the basics of Spring Boot",
                  value: 12,
                },
                {
                  name: "Create RESTful services with Spring Boot",
                  value: 16,
                },
              ],
            },
          ],
        },
        {
          name: "API Development",
          children: [
            {
              name: "RESTful API design",
              children: [
                {
                  name: "Understand REST principles (HTTP methods, status codes, resources)",
                  value: 10,
                },
                {
                  name: "Design RESTful APIs following best practices",
                  value: 12,
                },
              ],
            },
            {
              name: "GraphQL",
              children: [
                {
                  name: "Learn GraphQL concepts (types, queries, mutations)",
                  value: 12,
                },
                {
                  name: "Implement GraphQL APIs with libraries like Apollo Server",
                  value: 12,
                },
              ],
            },
          ],
        },
        {
          name: "Databases",
          children: [
            {
              name: "SQL",
              children: [
                {
                  name: "Master SQL queries for CRUD operations",
                  value: 14,
                },
                {
                  name: "Learn about database normalization and indexing",
                  value: 10,
                },
              ],
            },
            {
              name: "NoSQL (MongoDB, Redis)",
              children: [
                {
                  name: "Explore MongoDB for document-based storage",
                  value: 12,
                },
                {
                  name: "Use Redis for caching and in-memory data storage",
                  value: 10,
                },
              ],
            },
          ],
        },
        {
          name: "Authentication & Authorization",
          children: [
            {
              name: "Passport.js",
              children: [
                {
                  name: "Implement authentication strategies with Passport.js",
                  value: 10,
                },
                {
                  name: "Learn to integrate Passport.js with various authentication providers",
                  value: 12,
                },
              ],
            },
            {
              name: "OAuth 2.0",
              children: [
                {
                  name: "Understand OAuth 2.0 flows (authorization code, implicit, client credentials)",
                  value: 8,
                },
                {
                  name: "Implement OAuth 2.0 for secure API authentication",
                  value: 10,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function RoadMap() {
  const [inTree, setInTree] = useState(true);
  const [rdCluster, setRdCluster] = useState(false);
  const [tree, setTree] = useState(false);
  const [treeHorizontal, setTreeHorizontal] = useState(false);

  const handleinTreeClick = () => {
    setInTree(!inTree)
  }

  const handlerdClusterClick = () => {
    setRdCluster(!rdCluster)
  }

  const handletreeClick = () => {
    setTree(!tree)
  }

  const handletreeHorizontalClick = () => {
    setTreeHorizontal(!treeHorizontal)
  }

  return (
    <>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
        <button onClick={handleinTreeClick} className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
          IndentedTree
        </button>

        <button onClick={handlerdClusterClick} className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
          RandialClusterTree
        </button>

        <button onClick={handletreeClick} className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
          TreeChart
        </button>
        <button onClick={handletreeHorizontalClick} className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
          TreeChart-Horizontal
        </button>
      </span>
      {inTree && <IndentedTree data={enhancedDummyData} />}
      {rdCluster && <RadialClusterTree data={enhancedDummyData} />}
      {tree && <TreeChart data={initialData} />}
      {treeHorizontal && <TreeChartHorizontal data={initialData} />}
    </>
  );
}

export default RoadMap;
