def predict_heart_risk(values):

    risk_count = 0

    for metric,data in values.items():

        status = data["status"]

        if status == "risk":
            risk_count += 1

    # decision rule
    if risk_count >= 2:
        return 1   # High Risk
    else:
        return 0   # Low Risk