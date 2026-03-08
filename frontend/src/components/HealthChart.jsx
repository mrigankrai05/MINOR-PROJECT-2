import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement)

export default function HealthChart({ values }) {

  const labels = Object.keys(values)

  const dataValues = Object.values(values).map(v => v.value)

  const colors = Object.values(values).map(v =>
    v.status === "good"
      ? "#16a34a"
      : v.status === "borderline"
        ? "#f59e0b"
        : "#dc2626"
  )

  const data = {
    labels,
    datasets: [
      {
        label: "Medical Values",
        data: dataValues,
        backgroundColor: colors
      }
    ]
  }

  return <Bar data={data} />
}