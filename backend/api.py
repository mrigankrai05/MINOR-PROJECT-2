from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from report_parser import extract_text
from extract_values import extract_values
from health_score import compute_health_score
from heart_risk import predict_heart_risk
from ai_explanation import generate_explanation

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

from chatbot import ask_medical_ai
from pydantic import BaseModel

class ChatRequest(BaseModel):
    question: str
    values: dict


@app.post("/chat")
def chat(req: ChatRequest):

    reply = ask_medical_ai(req.question, req.values)

    return {"answer": reply}


@app.post("/upload-report")
async def upload_report(file: UploadFile = File(...)):

    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # 1️⃣ extract text
    text = extract_text(file_path)

    # 2️⃣ extract medical values
    values = extract_values(text)

    # 3️⃣ health score
    health_score = compute_health_score(values)

    # 4️⃣ heart risk
    prediction = predict_heart_risk(values)

    # 5️⃣ explanation
    explanation = generate_explanation(values)

    return {
        "extracted_values": values,
        "health_score": health_score,
        "prediction": prediction,
        "ai_explanation": explanation
    }