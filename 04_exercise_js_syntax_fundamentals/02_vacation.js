function calculateVacationPrice(peopleCount, groupType, day) {
    let pricePerPerson = 0;

    if (groupType === "Students") {
        if (day === "Friday") {
            pricePerPerson = 8.45;
        } else if (day === "Saturday") {
            pricePerPerson = 9.80;
        } else if (day === "Sunday") {
            pricePerPerson = 10.46;
        }
    } else if (groupType === "Business") {
        if (day === "Friday") {
            pricePerPerson = 10.90;
        } else if (day === "Saturday") {
            pricePerPerson = 15.60;
        } else if (day === "Sunday") {
            pricePerPerson = 16;
        }
    } else if (groupType === "Regular") {
        if (day === "Friday") {
            pricePerPerson = 15;
        } else if (day === "Saturday") {
            pricePerPerson = 20;
        } else if (day === "Sunday") {
            pricePerPerson = 22.50;
        }
    }

    let totalPrice = peopleCount * pricePerPerson;

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Business" && peopleCount >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// calculateVacationPrice(30, "Students", "Sunday");
// calculateVacationPrice(40, "Regular", "Saturday");
