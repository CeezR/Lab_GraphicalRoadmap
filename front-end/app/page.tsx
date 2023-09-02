import D3Test from "./D3Test";
import LinePlot from "./LinePlot";
import RoadMap from "./RoadMap";
import TreeChart from "./TreeChart";

const initialData = {
  name: "😐",
  children: [
    {
      name: "🙂",
      children: [
        {
          name: "😀"
        },
        {
          name: "😁"
        },
        {
          name: "🤣"
        }
      ]
    },
    {
      name: "😔"
    }
  ]
};

export default function Home() {
  return (
    <main>
      <TreeChart data={initialData} />
    </main>
  )
}
