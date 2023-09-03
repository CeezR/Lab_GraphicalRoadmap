import D3Test from "./D3Test";
import IndentedTree from "./IndentedTree";
import LinePlot from "./LinePlot";
import RadialClusterTree from "./RadialClusterTree";
import RoadMap from "./RoadMap";
import TreeChart from "./TreeChart";
import TreeChartHorizontal from "./TreeChartHorizontal";
import ZoomableSunburstChart from "./ZoomableSunburstChart";


const initialData = {
  "name": "Fullstack Developer",
  "children": [
    {
      "name": "Frontend Development",
      "children": [
        {
          "name": "HTML/CSS",
          "children": [
            {
              "name": "HTML5",
              "children": []
            },
            {
              "name": "CSS3",
              "children": []
            },
            {
              "name": "Responsive Design",
              "children": []
            }
          ]
        },
        {
          "name": "JavaScript",
          "children": [
            {
              "name": "React",
              "children": []
            },
            {
              "name": "Angular",
              "children": []
            },
            {
              "name": "Vue.js",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "name": "Backend Development",
      "children": [
        {
          "name": "Server-Side Language",
          "children": [
            {
              "name": "Node.js",
              "children": []
            },
            {
              "name": "Python (Flask/Django)",
              "children": []
            },
            {
              "name": "Java (Spring Boot)",
              "children": []
            }
          ]
        },
        {
          "name": "API Development",
          "children": [
            {
              "name": "RESTful API design",
              "children": []
            },
            {
              "name": "GraphQL",
              "children": []
            }
          ]
        },
        {
          "name": "Databases",
          "children": [
            {
              "name": "SQL",
              "children": []
            },
            {
              "name": "NoSQL (MongoDB, Redis)",
              "children": []
            }
          ]
        },
        {
          "name": "Authentication & Authorization",
          "children": [
            {
              "name": "Passport.js",
              "children": []
            },
            {
              "name": "OAuth 2.0",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}

const enhancedData = {
  "name": "Fullstack Developer",
  "children": [
    {
      "name": "Frontend Development",
      "children": [
        {
          "name": "HTML/CSS",
          "children": [
            {
              "name": "HTML5",
              "children": [
                {
                  "name": "Learn the basics of HTML tags and structure",
                  "children": []
                },
                {
                  "name": "Understand semantic HTML and its importance",
                  "children": []
                },
                {
                  "name": "Explore HTML5 elements like <canvas>, <video>, and <audio>",
                  "children": []
                }
              ]
            },
            {
              "name": "CSS3",
              "children": [
                {
                  "name": "Learn CSS selectors and properties",
                  "children": []
                },
                {
                  "name": "Study CSS box model, layout, and positioning",
                  "children": []
                },
                {
                  "name": "Dive into CSS Flexbox and CSS Grid for advanced layouts",
                  "children": []
                }
              ]
            },
            {
              "name": "Responsive Design",
              "children": [
                {
                  "name": "Learn responsive web design principles",
                  "children": []
                },
                {
                  "name": "Implement media queries to make your websites mobile-friendly",
                  "children": []
                },
                {
                  "name": "Study frameworks like Bootstrap and Foundation for responsive design",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "JavaScript",
          "children": [
            {
              "name": "Basic JavaScript",
              "children": [
                {
                  "name": "Master JavaScript fundamentals like variables, data types, and operators",
                  "children": []
                },
                {
                  "name": "Learn about control flow (if statements, loops) and functions",
                  "children": []
                }
              ]
            },
            {
              "name": "Intermediate JavaScript",
              "children": [
                {
                  "name": "Understand asynchronous programming with Promises and async/await",
                  "children": []
                },
                {
                  "name": "Study ES6+ features like arrow functions, classes, and destructuring",
                  "children": []
                }
              ]
            },
            {
              "name": "React",
              "children": [
                {
                  "name": "Learn React's component-based architecture",
                  "children": []
                },
                {
                  "name": "Create interactive UIs with React",
                  "children": []
                },
                {
                  "name": "Explore state management with Redux or Context API",
                  "children": []
                }
              ]
            },
            {
              "name": "Angular",
              "children": [
                {
                  "name": "Get started with Angular components and templates",
                  "children": []
                },
                {
                  "name": "Learn about Angular modules, services, and dependency injection",
                  "children": []
                }
              ]
            },
            {
              "name": "Vue.js",
              "children": [
                {
                  "name": "Understand Vue's reactivity system",
                  "children": []
                },
                {
                  "name": "Create Vue components and use Vue Router for routing",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Backend Development",
      "children": [
        {
          "name": "Server-Side Language",
          "children": [
            {
              "name": "Node.js",
              "children": [
                {
                  "name": "Learn about Node.js event loop and asynchronous programming",
                  "children": []
                },
                {
                  "name": "Create RESTful APIs using Express.js",
                  "children": []
                }
              ]
            },
            {
              "name": "Python (Flask/Django)",
              "children": [
                {
                  "name": "Get familiar with Flask or Django web frameworks",
                  "children": []
                },
                {
                  "name": "Build web applications and RESTful APIs",
                  "children": []
                }
              ]
            },
            {
              "name": "Java (Spring Boot)",
              "children": [
                {
                  "name": "Study the basics of Spring Boot",
                  "children": []
                },
                {
                  "name": "Create RESTful services with Spring Boot",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "API Development",
          "children": [
            {
              "name": "RESTful API design",
              "children": [
                {
                  "name": "Understand REST principles (HTTP methods, status codes, resources)",
                  "children": []
                },
                {
                  "name": "Design RESTful APIs following best practices",
                  "children": []
                }
              ]
            },
            {
              "name": "GraphQL",
              "children": [
                {
                  "name": "Learn GraphQL concepts (types, queries, mutations)",
                  "children": []
                },
                {
                  "name": "Implement GraphQL APIs with libraries like Apollo Server",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Databases",
          "children": [
            {
              "name": "SQL",
              "children": [
                {
                  "name": "Master SQL queries for CRUD operations",
                  "children": []
                },
                {
                  "name": "Learn about database normalization and indexing",
                  "children": []
                }
              ]
            },
            {
              "name": "NoSQL (MongoDB, Redis)",
              "children": [
                {
                  "name": "Explore MongoDB for document-based storage",
                  "children": []
                },
                {
                  "name": "Use Redis for caching and in-memory data storage",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "name": "Authentication & Authorization",
          "children": [
            {
              "name": "Passport.js",
              "children": [
                {
                  "name": "Implement authentication strategies with Passport.js",
                  "children": []
                },
                {
                  "name": "Learn to integrate Passport.js with various authentication providers",
                  "children": []
                }
              ]
            },
            {
              "name": "OAuth 2.0",
              "children": [
                {
                  "name": "Understand OAuth 2.0 flows (authorization code, implicit, client credentials)",
                  "children": []
                },
                {
                  "name": "Implement OAuth 2.0 for secure API authentication",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

const javaBackendRoadmap = {
  "name": "Backend Development with Java",
  "children": [
    {
      "name": "Java Basics",
      "children": [
        {
          "name": "Introduction to Java",
          "children": []
        },
        {
          "name": "Variables and Data Types",
          "children": []
        },
        {
          "name": "Control Flow (if, else, switch)",
          "children": []
        },
        {
          "name": "Functions and Methods",
          "children": []
        }
      ]
    },
    {
      "name": "Java Web Development",
      "children": [
        {
          "name": "Servlets",
          "children": []
        },
        {
          "name": "JavaServer Pages (JSP)",
          "children": []
        },
        {
          "name": "Tomcat Server",
          "children": []
        }
      ]
    },
    {
      "name": "Database Access with JDBC",
      "children": []
    },
    {
      "name": "Spring Boot",
      "children": [
        {
          "name": "Introduction to Spring Boot",
          "children": []
        },
        {
          "name": "Creating RESTful APIs with Spring Boot",
          "children": []
        },
        {
          "name": "Data Persistence with Spring Data JPA",
          "children": []
        },
        {
          "name": "Spring Security Basics",
          "children": []
        }
      ]
    },
    {
      "name": "API Documentation",
      "children": [
        {
          "name": "Swagger for API Documentation",
          "children": []
        }
      ]
    },
    {
      "name": "Authentication and Authorization",
      "children": [
        {
          "name": "Basic Authentication",
          "children": []
        },
        {
          "name": "Token-Based Authentication",
          "children": []
        }
      ]
    }
  ]
}

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


export default function Home() {
  return (
    <main className="p-3">
      <IndentedTree data={enhancedData} />
    </main>
  )
}
