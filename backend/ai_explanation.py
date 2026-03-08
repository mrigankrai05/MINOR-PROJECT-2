def generate_explanation(values):

    explanations = []

    for metric,data in values.items():

        value = data["value"]
        status = data["status"]

        context = []

        if status == "good":
            context.append(f"{metric} value {value} is within the healthy range.")

        elif status == "borderline":
            context.append(f"{metric} value {value} is slightly outside the ideal range.")

        else:
            context.append(f"{metric} value {value} indicates a potential health risk.")

        explanations.append({
            "metric": metric,
            "value": value,
            "context": context
        })

    return explanations