import { useState } from "react"
import axios from "axios"

import HealthChart from "./components/HealthChart"
import HealthScore from "./components/HealthScore"
import DoctorAdvice from "./components/DoctorAdvice"
import Chatbot from "./components/Chatbot"

import "./App.css"

function App() {

  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadReport = async () => {

    if (!file) {
      alert("Please select a medical report")
      return
    }

    setLoading(true)

    try {

      const formData = new FormData()
      formData.append("file", file)

      const res = await axios.post(
        "http://127.0.0.1:8000/upload-report",
        formData
      )

      setResult(res.data)

    }
    catch (err) {

      console.error(err)
      alert("Error analyzing report")

    }

    setLoading(false)

  }

  return (

    <div className="container">

      {/* HEADER */}

      <div className="header">

        <h1 className="mainTitle">
          AI Healthcare Assistant
        </h1>

        <p className="subtitle">
          Upload your medical report for AI-powered analysis
        </p>

        <div className="uploadContainer">

          <label className="uploadBox">

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <span className="uploadText">

              {file ? file.name : "Choose Medical Report"}

            </span>

          </label>

          <button
            className="uploadButton"
            onClick={uploadReport}
            disabled={loading}
          >

            {loading ? "Analyzing..." : "Upload Report"}

          </button>

        </div>

      </div>


      {/* LOADING */}

      {loading && (

        <div className="loading">

          <div className="pulse"></div>

          <p>AI analyzing medical report...</p>

        </div>

      )}


      {/* RESULTS */}

      {result && (

        <div className="splitLayout">

          {/* LEFT SIDE - REPORT */}

          <div className="leftPanel">

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


            {/* CHART */}

            <div className="chartCard">
              <HealthChart values={result.extracted_values} />
            </div>


            {/* HEALTH SCORE */}

            <div className="scoreSection">
              <HealthScore score={result.health_score} />
            </div>


            {/* PREDICTION */}

            <div className="predictionCard">

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


            {/* AI EXPLANATION */}

            <h2>AI Explanation</h2>

            <div className="explanationBox">

              {result.ai_explanation.map((item, index) => (
                <div key={index} className="explanationCard">

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


          {/* RIGHT SIDE - CHATBOT */}

          <div className="rightPanel">

            <Chatbot values={result.extracted_values} />

          </div>

        </div>

      )}

    </div>

  )

}

export default App