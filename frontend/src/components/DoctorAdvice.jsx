export default function DoctorAdvice({ values }) {

    const advice = []

    Object.entries(values).forEach(([metric, data]) => {

        if (data.status === "risk") {

            advice.push(`${metric} is abnormal. Please consult a physician.`)

        }

        else if (data.status === "borderline") {

            advice.push(`${metric} is slightly outside range. Monitor regularly.`)

        }

    })

    if (advice.length === 0) {

        advice.push("All major parameters look healthy.")

    }

    return (

        <div className="doctorPanel">

            <h2>AI Doctor Advice</h2>

            <ul>

                {advice.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}

            </ul>

        </div>

    )

}