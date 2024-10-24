// TOPIC:1                    Spread operator with arrays

example:1
let array1 = [1,2,3,4];
let array2 = [5,6,7,8];

console.log(...array1,...array2); // 1,2,3,4,5,6,7,8

example:2
let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [2, 4, 6, 8, 10];
let combinedNumbers = [...oddNumbers, ...evenNumbers];
console.log(combinedNumbers); // output [1,3,5,7,9,2,4,6,8,10]

// tOPIC2: -------------Spread operator with object -------------
type myObj = {
    name:string,
    age:number,
    gender:string
}
let obj:myObj = {
    name:"Shahab",
    age:22,
    gender:"Male",

};

// To update the value of an object
example:1
let origionalObject = {
    name:"Shahab",
    age:22
};

origionalObject.age = 23;
console.log(origionalObject) // {name:"Shahab",age:23}

// example 2
let obj1 = {
    name:"Shahab",
   age:22
};
obj1.name = "Shahab Ud Din";
console.log(obj1) // {name:"Shahab Ud Din",age:22}

// ----------------------------------------------------------------------------------------------------
// 2nd way to update object values is using spread operator

//  ---------------------------- example 1 ---------------------------------

let initialObject = {
    name:"Shahab",
    age:23,
    gender:"Male"
};

// now update the value of an object
let updateObject = {
    ...initialObject,
    name:"Ali",
    gender:"male",
    Caste:"Yar Nahin kabr"
};
console.log(updateObject) // { name:"Ali",gender:"male",Caste:"Yar Nahin kabr"};

// -------------------------------------- example 2 ---------------------------------------

let objectOne = {
    name:"Muhammad",
    age:24
};

// now updateObject
let newObject = {
    ...objectOne,

    age:25
};

console.log(newObject) // {name:"Muhammad",age:25}

// ------------------------ example 3 ----------------------------------
// type of student object
type std = {
    name:string,
    rollNumber:string,
    teacherName:string,
    quarter:number,
    institution:string,
    subject:string,
    timeSlot:string
}

let studentInQrarter1:std = {
    name:"Shahab Ud Din",
    rollNumber:"xyz",
    teacherName:"Hamzah Syed",
    quarter:1,
    institution:"GIAIC",
    subject:"TypeScript",
    timeSlot:"Saturday 2pm to 5pm"
};

let inQuarter2:std = {
     ...studentInQrarter1,
     teacherName:"Muhammad Bilal",
     quarter:2,
     subject:"Next Js"

}
console.log("I in quarter 1")
console.log(studentInQrarter1); 
console.log("In in quarter 2")
console.log(inQuarter2); // data will be updated

// ------------- exaple 4 ------------------
let firstSemester = {
        subj1:"Functional English",
        subj2:"Applied Calculus",
        subj3:"Applied Physics",
        subj4:"Islamiat",
        subj5:"Introduction to Computers"
};

// now as you are in 2nd semester in QUEST so update your subjects
let secondSemester = {
    ...firstSemester,

       subj2:"Circuit Analysis",
       subj3:"Linear Algebra",
       subj4:"Computer Programming",
       subj5:"Electronic Workshop"
};

console.log(secondSemester);

// --------------------- example 5 ---------------------
const pakistanT20Team = {
  format: "T20 Team",
  player1: "Babar Azam",
  player2: "Muhammad Rizwan",
  player3: "Shadab",
  player4: "Iftikhar",
  player5: "Saim Ayub",
  player6: "Shaheen Afridi",
  player7: "Naseem Shah",
  player8: "Haris Rauf",
  player9: "Usama Meer",
  player10: "Imad Waseem",
  player11: "M Amir",
};

const pakistanOdiTeam = {
  ...pakistanT20Team,
  format: "ODI Team",
  player5: "Imam ul Haq",
  player9: "Ibrar Ahmed",
  player10: "Amir Jamal",
  player11: "Muhammad Waseem",
};

const pakistanTestTeam = {
  ...pakistanOdiTeam,
  format: "Test Team",
  player3: "Saud Shakeel",
  player4: "Agha Salman",
  player5: "Sarfraz Ahmed",
  player8: "Mir Hamza",
  player9: "Zahid Mehmood",
  player10: "Noman Ali",
  player11: "Sajid Khan",
};
console.log(pakistanT20Team); //see the output below:
// {
//     format: 'T20 Team',
//     player1: 'Babar Azam',
//     player2: 'Muhammad Rizwan',
//     player3: 'Shadab',
//     player4: 'Iftikhar',
//     player5: 'Saim Ayub',
//     player6: 'Shaheen Afridi',
//     player7: 'Naseem Shah',
//     player8: 'Haris Rauf',
//     player9: 'Usama Meer',
//     player10: 'Imad Waseem',
//     player11: 'M Amir'
//   }

console.log(pakistanOdiTeam);// see the output below:

// {
//     format: 'ODI Team',
//     player1: 'Babar Azam',
//     player2: 'Muhammad Rizwan',
//     player3: 'Shadab',
//     player4: 'Iftikhar',
//     player5: 'Imam ul Haq',
//     player6: 'Shaheen Afridi',
//     player7: 'Naseem Shah',
//     player8: 'Haris Rauf',
//     player9: 'Ibrar Ahmed',
//     player10: 'Amir Jamal',
//     player11: 'Muhammad Waseem'
//   }

console.log(pakistanTestTeam);// see the output below:
// {
//     format: 'Test Team',
//     player1: 'Babar Azam',
//     player2: 'Muhammad Rizwan',
//     player3: 'Saud Shakeel',
//     player4: 'Agha Salman',
//     player5: 'Sarfraz Ahmed',
//     player6: 'Shaheen Afridi',
//     player7: 'Naseem Shah',
//     player8: 'Mir Hamza',
//     player9: 'Zahid Mehmood',
//     player10: 'Noman Ali',
//     player11: 'Sajid Khan'
//   }
