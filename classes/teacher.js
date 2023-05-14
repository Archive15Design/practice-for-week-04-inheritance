const Person = require('./person');

// Your code here

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName,lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers){
    const sumExperience = teachers.reduce((accumulator, currentEle,) => accumulator + currentEle.yearsOfExperience, 0);
    return sumExperience;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
