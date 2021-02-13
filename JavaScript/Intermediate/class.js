// class student{
//     constructor(sId, sName){
//         this.id =sId;
//         this.name =sName;
//         this.school ="Desi Boys School";
//     }
// }

//  const student1 = new student(12,"Rahim");
//  const student2 = new student(11, "sharim");

//  console.log(student1.name, student1.id);

class Parent{
    constructor(){
        this.FatherName ="Ishraq";
    }
}

 class child extends Parent{
     constructor(name){
         super();
         this.Name = name;
     }
 }
const baby = new child("Arnold");
console.log(baby);