import D3Test from "./D3Test";
import LinePlot from "./LinePlot";
import RadialClusterTree from "./RadialClusterTree";
import RoadMap from "./RoadMap";
import TreeChart from "./TreeChart";
import TreeChartHorizontal from "./TreeChartHorizontal";


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




export default function Home() {
  return (
    <main className="p-3">
      <RadialClusterTree data={enhancedData} />
    </main>
  )
}
