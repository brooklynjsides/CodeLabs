///////////////// Builder Design Pattern
// class Calculator {
//   constructor() {
//     this._value = 0;
//   }

//   add(value) {
//     this._value += value;
//     return this;
//   }

//   multiply(value) {
//     this._value *= value;
//     return this;
//   }
//   get value() {
//     return this._value;
//   }
// }

// const myCalculator = new Calculator();
// myCalculator.add(10).multiply(2);

// const myBFCalculator = new Calculator();
// myBFCalculator.add(30);

// console.log("Mine:", myCalculator.value);
// console.log("Theirs:", myBFCalculator.value);

//////////////Structural Design Patter
// class Employee {
//   constructor(name, position) {
//     this._name = name;
//     this._position = position;
//   }
// }

// class Developer extends Employee {
//   constructor(name, position) {
//     super(name, position);
//   }
// }

// class LeadDeveloper extends Employee {
//   constructor(name, position) {
//     super(name, position);
//     this._team = [];
//   }

//   addMember(member) {
//     this._team.push(member);
//   }

//   viewTeam() {
//     const teamView = this._team.map((teamMember) => {
//       const member = {
//         name: teamMember._name,
//         position: teamMember._position,
//       };
//       return member;
//     });
//     return teamView;
//   }
// }

// const developer1 = new Developer("Brooklyn", "Developer");
// const developer2 = new Developer("Nick", "Developer");
// const leadDeveloper1 = new LeadDeveloper("Tim", "Lead");

// leadDeveloper1.addMember(developer1);
// leadDeveloper1.addMember(developer2);

// console.log(leadDeveloper1);
// console.log(leadDeveloper1.viewTeam());

///////// Observer Design Pattern - is a behavioral pattern

// class EventObserver {
//   constructor() {
//     this._observers = [];
//   }

//   subscribe(fn) {
//     this._observers.push(fn);
//   }

//   broadcast(data) {
//     this._observers.forEach((subscription) => {
//       subscription(data);
//     });
//   }
// }

// const fakeObserver = new EventObserver();
// fakeObserver.subscribe((data) => {
//   console.log(data);
// });

// fakeObserver.broadcast("Cook");

// console.log(EventObserver.broadcast());

///////////////// OBSERVER DESIGN DEMO

