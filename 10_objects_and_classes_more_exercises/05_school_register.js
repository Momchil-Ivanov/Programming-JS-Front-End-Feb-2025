function processSchoolRegister(students) {
    const register = {};

    students.forEach(student => {
        const [namePart, gradePart, scorePart] = student.split(', ');
        const name = namePart.split(': ')[1];
        const grade = parseInt(gradePart.split(': ')[1]);
        const score = parseFloat(scorePart.split(': ')[1]);

        if (score >= 3) {
            const nextGrade = grade + 1;

            if (!register[nextGrade]) {
                register[nextGrade] = { students: [], totalScore: 0, count: 0 };
            }

            register[nextGrade].students.push(name);
            register[nextGrade].totalScore += score;
            register[nextGrade].count++;
        }
    });

    const sortedGrades = Object.keys(register).sort((a, b) => a - b);
    sortedGrades.forEach(grade => {
        const { students, totalScore, count } = register[grade];
        const averageScore = (totalScore / count).toFixed(2);
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log();
    });
}

// const studentsInput = [
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ];

// processSchoolRegister(studentsInput);

// const studentsInput2 = [
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
//     ]

// processSchoolRegister(studentsInput2);
