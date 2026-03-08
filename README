AI Healthcare Assistant

An AI-powered medical report analysis platform that extracts values from uploaded medical reports, evaluates health metrics, predicts potential heart risk, and provides an interactive AI medical assistant chatbot for explanations.

The system combines machine learning, NLP, and modern web technologies to help users better understand their medical reports.

Features
Medical Report Upload

Upload a PDF medical report and automatically extract important health metrics.

Smart Value Extraction

Automatically detects key health parameters such as:

Hemoglobin

RBC (Red Blood Cells)

WBC (White Blood Cells)

Platelets

Hematocrit

MCV

Health Score

Calculates an overall health score based on medical ranges.

Green → Healthy

Orange → Borderline

Red → Risk

Risk Prediction

Uses a machine learning model to estimate heart disease risk.

AI Explanation

Provides human-readable explanations for each medical parameter.

Example:

Hemoglobin: 15 g/dL
This is within the normal range and indicates healthy oxygen transport in the body.

Interactive AI Medical Assistant

Users can ask questions about their report:

Example:

Is my WBC normal?
What does platelet count mean?
Should I consult a doctor?

Powered by Google Gemini AI.

Medical Dashboard

Modern UI with:

Extracted values cards

Color-coded health indicators

Interactive charts

Split-screen chatbot interface

Project Architecture

Frontend (React + Vite)

Upload medical report

Display extracted values

Show charts and health score

AI chatbot interface

Backend (FastAPI)

PDF processing

Medical value extraction

Health score calculation

Risk prediction

Gemini AI integration

AI Services

Machine learning risk model

Google Gemini medical assistant

Tech Stack
Frontend

React

Vite

Axios

CSS

Backend

FastAPI

Python

Uvicorn

AI / ML

Google Gemini API

Medical value analysis logic

Risk prediction model

Data Processing

PDF parsing

Pattern extraction

Medical range analysis

Project Structure
AI-Healthcare-Assistant
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── HealthChart.jsx
│   │   └── components
│   │        └── Chatbot.jsx
│
├── backend
│   ├── api.py
│   ├── extract_values.py
│   ├── report_parser.py
│   ├── health_score.py
│   ├── heart_risk.py
│   ├── ai_explanation.py
│   └── chatbot.py
│
└── README.md
Installation
1. Clone the Repository
git clone https://github.com/yourusername/ai-healthcare-assistant.git
cd ai-healthcare-assistant
Backend Setup
Install dependencies
pip install fastapi uvicorn google-genai python-multipart
Run backend
uvicorn api:app --reload

Backend will run on

http://127.0.0.1:8000
Frontend Setup

Navigate to frontend:

cd frontend

Install dependencies:

npm install

Run frontend:

npm run dev

Frontend will run on

http://localhost:5173
Gemini API Setup

Create a Gemini API key from:

https://aistudio.google.com/app/apikey

Then add it in chatbot.py:

client = genai.Client(api_key="YOUR_API_KEY")
How It Works

User uploads a medical report.

Backend extracts key medical values.

Values are classified as Good / Borderline / Risk.

Health score is computed.

Risk prediction is generated.

AI explanations are created.

User can ask questions using the AI chatbot.

Example Workflow

Upload Medical Report
↓

Extract Health Parameters
↓

Health Score + Risk Prediction
↓

AI Explanation
↓

Chat with AI Medical Assistant

Future Improvements

OCR support for scanned reports

Patient history tracking

Doctor consultation recommendations

Voice-based AI assistant

Multi-report comparison

Secure medical data storage

Disclaimer

This project is for educational and research purposes only.
It should not replace professional medical advice.

Always consult a qualified healthcare professional for medical decisions.