const inputGrades: number[] = [73, 67, 38, 33];

function formatingGradeToRole(grade: number): number {
    let gradeIncrement = grade;

    if(grade >= 38) {
        while(gradeIncrement % 5 != 0) {
            gradeIncrement++;
        }
    }
    
    if((gradeIncrement - grade) < 3) {
        return gradeIncrement;
    } else {
        return grade
    }
}

function gradingStudents(grades: number[]): number[] {
    // Write your code here
    let finalGrade: number[] = [];
    grades.forEach((grade) => {
        finalGrade.push(formatingGradeToRole(grade));

    })
    return finalGrade;
}

console.log(gradingStudents(inputGrades));