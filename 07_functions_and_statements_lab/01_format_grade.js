function formatGrade(rawGrade) {
    let state = ""

    if (rawGrade >= 5.50) {
        state = "Excellent"
    } else if (rawGrade >= 4.50) {
        state = "Very good"
    } else if (rawGrade >= 3.50) {
        state = "Good"
    } else if (rawGrade >= 3.00) {
        state = "Poor"
    } else {
        state = "Fail"
        console.log(`${state} (2)`)
        return
    }

    console.log(`${state} (${rawGrade.toFixed(2)})`)
}

// formatGrade(3.33)
// formatGrade(4.50)
// formatGrade(2.99)
