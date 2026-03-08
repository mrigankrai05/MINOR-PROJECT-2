from google import genai

client = genai.Client(api_key="")

def ask_medical_ai(question, values):

    prompt = f"""
You are an AI medical assistant.

Patient medical report values:
{values}

User question:
{question}

Explain clearly in simple language.
Do not give dangerous medical advice.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text