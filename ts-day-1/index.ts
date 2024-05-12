// let num: number = 1;
// let num2: number = 2;
// let male: boolean = true;
// let num3: number = 3;
// let str: string = "Han";
// num="hello";

// let str1: string;
// str1 = "Han Han";
// let han = "han";
// console.log(num);
// console.log(num2);

// console.log("min ga lar par");

// class Han {
//   name: "Han Htun Aung";
// }

// interface personHan {
//   name: string;
//   age: number;
//   gender: string;
//   gf: boolean;
//   job?: boolean;
// }

type personHan = {
  name: string;
  age: number;
  gender: string;
  gf: boolean;
  job?: boolean;
};
type NRC = {
  nation?: string;
};

const person: personHan & NRC = {
  name: "Han",
  age: 27,
  gender: "male",
  gf: true,
  nation: "Myanmar",
};

console.log(person);
console.log(person.gf);

const sum = (x: number, y: number): void => {
    // return x + y;
  console.log(x + y);
};
// console.log(sum(3,3));
sum(2 , 3);
