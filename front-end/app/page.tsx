import D3Test from "./D3Test";
import LinePlot from "./LinePlot";
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


export default function Home() {
  return (
    <main className="p-3">
      <TreeChartHorizontal data={initialData} />
    </main>
  )
}
