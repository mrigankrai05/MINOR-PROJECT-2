def compute_health_score(values):

    score = 100

    for metric,data in values.items():

        status = data["status"]

        if status == "borderline":
            score -= 10

        elif status == "risk":
            score -= 20

    return max(score,0)