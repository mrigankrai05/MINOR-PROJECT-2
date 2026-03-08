import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function HealthScore({ score }) {

    let color = "#16a34a"

    if (score < 80) color = "#f59e0b"
    if (score < 50) color = "#dc2626"

    return (

        <div style={{ width: "180px", margin: "auto" }}>

            <CircularProgressbar
                value={score}
                text={`${score}`}
                styles={{
                    path: { stroke: color },
                    text: { fill: color, fontWeight: "700" }
                }}
            />

            <p style={{ textAlign: "center", marginTop: "10px" }}>
                Health Score
            </p>

        </div>

    )

}