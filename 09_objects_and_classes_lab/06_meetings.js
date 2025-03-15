function manageMeetings(meetings) {
    const scheduledDays = new Set();
    const successfulMeetings = [];

    for (const meeting of meetings) {
        const [day, person] = meeting.split(' ');

        if (scheduledDays.has(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            scheduledDays.add(day);
            successfulMeetings.push(`${day} -> ${person}`);
            console.log(`Scheduled for ${day}`);
        }
    }

    console.log(successfulMeetings.join('\n'));
}

// manageMeetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
// manageMeetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);
