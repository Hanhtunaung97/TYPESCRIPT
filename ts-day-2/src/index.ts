// // const arr:(string |number) [] = ["han",27];
// // arr.push("htun");
// // arr.pop()
// // arr.shift()
// // arr.unshift("aung")
// // console.log(arr);

// // type person = {
// //   name: string;
// //   age: number;
// //   gender?: "male" | "female";
// // };
// // const arr1: person[] = [
// //   {
// //     name: "han htun aung",
// //     age: 27,
// //     gender: "male",
// //   },
// //   {
// //     name: "TheintNandarZaw",
// //     age: 26,
// //     gender: "female",
// //   },
// // ];
// // console.log(arr1);

// // const tuple: [string, number, boolean, person, boolean] = [
// //   "hello",
// //   1,
// //   true,
// //   { name: "han", age: 27 },
// //   true,
// // ];
// // tuple[1] = 27;
// // tuple[4]=false
// // tuple.push("aung");
// // tuple.pop();
// // console.log(tuple);

let human: any = [];
// //  human=27;
// // human={}
// // console.log(human.push("han"));
// // console.log(human.push("htun"));
// // console.log(human.pop());
console.log(human);

// // const printer = (): never => {
// //   console.log("hello");
// //   throw new Error("this is error");
// // //   return "hello";
// // };
// // console.log(printer());

// enum Gender {
//   male,
//   female,
//   other,
// }

// type person = {
//   name: string;
//   gender: Gender;
// };

// const Han: person = {
//   name: "hanhtunaung",
//   gender: Gender.male,
// };
// console.log(Han);

// if (Han.gender === Gender.male) {
//   console.log("This is boy");
// }

// let arr: number[] | string;

// arr = "hello";
// arr = [1, 2, 3, 4];
// console.log(arr.push(5));
// console.log(arr);

// let x: unknown = 5;
// // console.log((x as string).length);
// console.log((x as number).toString());

// type fun = (x: number, y: number) => void;
// const sum = (x: number, y: number): number => {
//   return x + y;
// };
// let calc: fun = sum;
// console.log(calc(5, 4));
// // console.log(sum(1,2));

// window.alert("hello")
// let pp='han'
// console.log(pp);
// let pp=1;
// console.log(pp);

type cat = {
  name?: string;
  gender?: string;
};
const Tom1: cat = {
  name: "TOM",
  // gender:"male"
};
const Tom: Required<cat> = {
  name: "Tom",
  gender: "male",
};
console.log(Tom);
const Tom3: Omit<cat, "gender"> = {
  name: "Tome",
  // gender:"male"
};
console.log(Tom3);
const Tom2: Pick<cat, "name"> = {
  name: "Tommy",
//   gender: "male",
};
console.log(Tom2);

const Jerry: Record<string | number, string | number | boolean> = {
  name: "Jerry",
  age: 14,
  job: false,
};
console.log(Jerry);
