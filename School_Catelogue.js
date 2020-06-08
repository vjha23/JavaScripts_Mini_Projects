class School{
    constructor(name,level,numberOfStudents){
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
   quickFacts(){
     console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level. `);
   }
  
   static pickSubstituteTeacher(substituteTeachers){
     const random_index=Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[random_index];
   }
  
    set numberOfStudents(value){
      if(typeof value==='int'){
        this._numberOfStudents=value;
      }else{
        return 'Invalid input: numberOfStudents must be set to a Number.';
      }
    }
  }
  
  
  class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,'primary',numberOfStudents);
      this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  
  class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
      super(name,'high',numberOfStudents);
      this._sportsTeams=sportsTeams;
    }
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  
  // creating instances
  const lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  const teach=School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log(teach);
  
  // High school instances
  const alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);