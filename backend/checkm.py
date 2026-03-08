from google import genai

client = genai.Client(api_key="AIzaSyDgU01IWFKcsAQmV6vesYghkxYreP2NEx8")

models = client.models.list()

for model in models:
    print(model.name)