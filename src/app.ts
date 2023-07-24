// #1

const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// #2

// let age: number = 50;
// let namePerson: string = "Max";
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
// let callback: (a: number) => number = (a) => {
//   return 100 + a;
// };

// #3

// let anything: any = -20;
// anything = "Text";
// anything = {};

// #4

// let some: unknown;
// some = "Text";

// let str: string;

// if (typeof some === "string") {
//   str = some;
// }

// #5

// let person: [string, number] = ["Max", 21];

// #6

// enum Status {
//   LOADING,
//   READY,
// }

// #7

// let var1: string | number;
// let var2: "enable" | "disable";

// #8

// function showMessage(message): void {
//   console.log(message);
// }

// function calc(num1, num2): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// #9

// type Page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1: Page = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2: Page = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
