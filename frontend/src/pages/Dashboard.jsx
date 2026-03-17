import { useState } from "react"

import HealthChart from "../components/HealthChart"
import HealthScore from "../components/HealthScore"
import Chatbot from "../components/Chatbot"
import { useLocation, useNavigate } from "react-router-dom"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

const downloadPDF = async () => {

    const element = document.getElementById("reportContent")

    const canvas = await html2canvas(element)

    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF()

    const width = pdf.internal.pageSize.getWidth()
    const height = (canvas.height * width) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, width, height)

    pdf.save("health-report.pdf")

}

export default function Dashboard() {

    const navigate = useNavigate()

    const location = useLocation()
    const result = location.state

    const [activeTab, setActiveTab] = useState("report")

    if (!result) {
        return <h2 style={{ textAlign: "center" }}>No Data Found</h2>
    }

    return (

        <div className="container">
            <button
                className="backButton"
                onClick={() => navigate("/")}
            >
                ← Back to Upload
            </button>

            {/* TAB SWITCH */}

            <div className="tabBar">

                <button
                    className={activeTab === "report" ? "tab activeTab" : "tab"}
                    onClick={() => setActiveTab("report")}
                >
                    📊 Report Analysis
                </button>

                <button
                    className={activeTab === "chat" ? "tab activeTab" : "tab"}
                    onClick={() => setActiveTab("chat")}
                >
                    🤖 AI Doctor
                </button>

            </div>


            {/* REPORT TAB */}

            {activeTab === "report" && (
                <div id="reportContent">
                    {/* all report UI */}


                    <div className="leftPanel">

                        <button className="downloadBtn" onClick={downloadPDF}>
                            🧾 Download Report
                        </button>

                        <h2>Extracted Values</h2>

                        <div className="valuesGrid">
                            {Object.entries(result.extracted_values).map(([key, data]) => (

                                <div className="valueCard" key={key}>

                                    <span className="metricName">
                                        {key.toUpperCase()}
                                    </span>

                                    <span
                                        className="metricValue"
                                        style={{
                                            color:
                                                data.status === "good"
                                                    ? "#16a34a"
                                                    : data.status === "borderline"
                                                        ? "#f59e0b"
                                                        : "#dc2626"
                                        }}
                                    >
                                        {data.value}
                                    </span>

                                </div>

                            ))}
                        </div>


                        <div className="chartCard ">
                            <HealthChart values={result.extracted_values} />
                        </div>


                        <div className="scoreSection">
                            <HealthScore score={result.health_score} />
                        </div>


                        <div className="predictionCard glassCard">

                            <h3>Prediction</h3>

                            <p
                                style={{
                                    color:
                                        result.prediction === 1
                                            ? "#dc2626"
                                            : "#16a34a"
                                }}
                            >

                                {result.prediction === 1
                                    ? "⚠ High Heart Risk"
                                    : "✓ Low Heart Risk"}

                            </p>

                        </div>


                        <h2>AI Explanation</h2>

                        <div className="explanationBox">

                            {result.ai_explanation.map((item, index) => (

                                <div key={index} className="explanationCard glassCard">

                                    <h3>{item.metric}</h3>

                                    <ul>
                                        {item.context.map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))}
                                    </ul>

                                </div>

                            ))}

                        </div>

                    </div>
                </div>

            )}


            {/* CHAT TAB */}

            {activeTab === "chat" && (

                <div className="chatTabWrapper">

                    <Chatbot values={result.extracted_values} />

                </div>

            )}

        </div>

    )

}