import re

IMPORTANT_METRICS = {
    "hemoglobin": r"hemoglobin\s*[:\-]?\s*(\d+\.?\d*)",
    "rbc": r"rbc\s*(count)?\s*[:\-]?\s*(\d+\.?\d*)",
    "wbc": r"(total\s*)?leukocyte\s*(count)?\s*[:\-]?\s*(\d+\.?\d*)",
    "platelets": r"platelet\s*(count)?\s*[:\-]?\s*(\d+\.?\d*)",
    "hematocrit": r"hematocrit\s*[:\-]?\s*(\d+\.?\d*)",
    "mcv": r"mcv\s*[:\-]?\s*(\d+\.?\d*)"
}

NORMAL_RANGES = {
    "hemoglobin": (13,17),
    "rbc": (4.5,5.5),
    "wbc": (4,10),
    "platelets": (150,450),
    "hematocrit": (38,50),
    "mcv": (80,100)
}

def get_status(metric,value):

    low,high = NORMAL_RANGES[metric]

    if low <= value <= high:
        return "good"

    elif value < low * 0.9 or value > high * 1.1:
        return "risk"

    else:
        return "borderline"


def extract_values(text):

    values = {}

    for metric,pattern in IMPORTANT_METRICS.items():

        match = re.search(pattern,text,re.IGNORECASE)

        if match:

            number = re.findall(r"\d+\.?\d*",match.group())[0]
            value = float(number)

            values[metric] = {
                "value": value,
                "status": get_status(metric,value)
            }

    return values