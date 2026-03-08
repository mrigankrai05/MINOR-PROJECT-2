# 🩺 AI Healthcare Assistant

An **AI-powered medical report analysis platform** that extracts
important health values from medical reports, evaluates them against
standard medical ranges, predicts potential health risks, and provides
explanations through an **AI medical assistant chatbot**.

The project combines **Machine Learning, Natural Language Processing,
and Full-Stack Development** to help users better understand their
medical reports.

------------------------------------------------------------------------

# 🚀 Features

## 📄 Medical Report Upload

Upload a **PDF medical report** and automatically extract important
health metrics.

## 🔎 Smart Value Extraction

Automatically detects key health parameters such as:

-   Hemoglobin
-   RBC (Red Blood Cells)
-   WBC (White Blood Cells)
-   Platelets
-   Hematocrit
-   MCV
-   MCH
-   MCHC

## 📊 Health Score System

Calculates an **overall health score** based on medical ranges.

Color indicators:

-   🟢 Green → Healthy
-   🟠 Orange → Borderline
-   🔴 Red → Risk

## ⚠ Risk Prediction

Predicts **heart disease risk** using a trained machine learning model.

## 🧠 AI Explanation

Provides **easy-to-understand explanations** for each medical value.

Example:

Hemoglobin: 15 g/dL\
This value is within the normal range and indicates healthy oxygen
transport in the body.

## 🤖 AI Medical Chatbot

Users can ask questions about their report such as:

-   Is my WBC normal?
-   What does platelet count mean?
-   Should I consult a doctor?

Powered by **Google Gemini AI**.

## 📈 Medical Dashboard

The system provides a **modern healthcare dashboard** including:

-   Extracted health values
-   Color-coded status indicators
-   Interactive charts
-   Health score display
-   Risk prediction
-   AI chatbot

------------------------------------------------------------------------

# 🏗 Project Architecture

Frontend (React + Vite) - Upload medical report - Display extracted
values - Show charts and health score - AI chatbot interface

Backend (FastAPI) - PDF parsing - Value extraction - Health score
calculation - Risk prediction - Gemini AI integration

------------------------------------------------------------------------

# 🧰 Tech Stack

### Frontend

-   React
-   Vite
-   Axios
-   CSS

### Backend

-   FastAPI
-   Python
-   Uvicorn

### AI / ML

-   Google Gemini API
-   Medical value analysis logic
-   Risk prediction model

### Data Processing

-   PDF parsing
-   Pattern matching
-   Medical range classification

------------------------------------------------------------------------

# 📁 Project Structure

AI-Healthcare-Assistant │ ├── frontend │ ├── src │ │ ├── App.jsx │ │ ├──
App.css │ │ ├── HealthChart.jsx │ │ └── components │ │ └── Chatbot.jsx │
├── backend │ ├── api.py │ ├── extract_values.py │ ├── report_parser.py
│ ├── health_score.py │ ├── heart_risk.py │ ├── ai_explanation.py │ └──
chatbot.py │ └── README.md

------------------------------------------------------------------------

# ⚙ Installation Guide

## Clone Repository

git clone https://github.com/yourusername/ai-healthcare-assistant.git cd
ai-healthcare-assistant

------------------------------------------------------------------------

# Backend Setup

pip install fastapi uvicorn google-genai python-multipart

Run backend:

uvicorn api:app --reload

Backend runs on:

http://127.0.0.1:8000

------------------------------------------------------------------------

# Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173

------------------------------------------------------------------------

# Gemini API Setup

Generate a Gemini API key from:

https://aistudio.google.com/app/apikey

Add your key in chatbot.py

------------------------------------------------------------------------

# Application Workflow

Upload Medical Report\
↓\
Extract Medical Values\
↓\
Compare With Medical Ranges\
↓\
Generate Health Score\
↓\
Predict Health Risk\
↓\
Generate AI Explanation\
↓\
Chat With AI Medical Assistant

------------------------------------------------------------------------

# ⚠ Disclaimer

This project is for **educational purposes only** and should not replace
professional medical advice. Always consult a qualified doctor for
medical decisions.

------------------------------------------------------------------------

# 👨‍💻 Author

**Mrigank Rai**\
B.Tech -- Jaypee Institute of Information Technology
