const Person = require('./person');

// Your code here

class Student extends Person {
  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2){
    const gpa1 = student1.GPA;
    const gpa2 = student2.GPA;

    if (gpa1 === gpa2){
      return 'Both students have the same GPA';
    } else if (gpa1 > gpa2){
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
