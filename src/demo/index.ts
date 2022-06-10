import Stringles from "../lib";
const stringles = new Stringles();

const demo1 = stringles.upperCase("Hello World");
const demo2 = stringles.lowerCase("Hello World");
const demo3 = stringles.camelCase("hello world");
const demo4 = stringles.unCamelCase("helloWorld");
const demo5 = stringles.properCase("hello world");
const demo6 = stringles.pascalCase("hello world see you later");
const demo7 = stringles.sentenceCase("hello world see you later. maybe tomorrow");

console.log(demo1);
console.log(demo2);
console.log(demo3);
console.log(demo4);
console.log(demo5);
console.log(demo6);
console.log(demo7);
