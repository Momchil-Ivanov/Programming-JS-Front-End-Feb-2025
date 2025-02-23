function getMonthName(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        return "Error!";
    }
    
    // Create a date object with any year/day, but the target month (zero-based index)
    const date = new Date(2000, monthNumber - 1, 1);
    
    // Use toLocaleString to get the month name
    return date.toLocaleString(undefined, { month: 'long' });
}

// console.log(getMonthName(1));
// console.log(getMonthName(12));
// console.log(getMonthName(13));
