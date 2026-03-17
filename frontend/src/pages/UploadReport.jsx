import { useState } from "react"
import { useDropzone } from "react-dropzone"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function UploadPage() {

    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0])
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "application/pdf": [] }
    })

    const uploadReport = async () => {

        if (!file) {
            alert("Please upload a report")
            return
        }

        setLoading(true)

        const formData = new FormData()
        formData.append("file", file)

        try {

            const res = await axios.post(
                "http://127.0.0.1:8000/upload-report",
                formData
            )

            navigate("/dashboard", { state: res.data })

        } catch (err) {
            alert("Error uploading report")
        }

        setLoading(false)

    }

    return (

        <div className="page">

            {/* NAVBAR */}

            <div className="navbar">

                <h2 className="logo">MedAI</h2>

                <div className="navLinks">
                    <span>Home</span>
                    <span>Features</span>
                    <span>About</span>
                </div>

            </div>


            {/* HERO SECTION */}

            <div className="hero">

                <h1 className="heroTitle">
                    AI Healthcare Assistant
                </h1>

                <p className="heroSubtitle">
                    Understand your medical reports instantly using AI-powered analysis
                </p>

            </div>


            {/* UPLOAD CARD */}

            <div className="uploadCard glassCard">

                <h2>Upload Medical Report</h2>

                <p className="uploadHint">
                    Supported format: PDF
                </p>

                <div {...getRootProps()} className="dropzone">

                    <input {...getInputProps()} />

                    {
                        isDragActive
                            ? <p>Drop your file here...</p>
                            : <p>Drag & Drop or Click to Upload</p>
                    }

                </div>


                {/* FILE PREVIEW */}

                {file && (

                    <div className="filePreview">

                        <div className="fileBox">

                            <span>📄 {file.name}</span>

                            <span className="fileSize">
                                {(file.size / 1024).toFixed(1)} KB
                            </span>

                        </div>

                    </div>

                )}


                {/* BUTTON */}

                <button
                    className="analyzeBtn"
                    onClick={uploadReport}
                    disabled={loading}
                >

                    {loading ? "Analyzing..." : "Analyze Report"}

                </button>

            </div>


            {/* FOOTER */}

            <div className="footer">

                <p>© 2026 MedAI · AI Healthcare Assistant</p>

            </div>

        </div>

    )

}