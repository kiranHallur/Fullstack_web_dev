// const superheroes=require("superheroes")       cjs -> common js
import superheroes from "superheroes";       //   esm -> ECMAScript module          "type"="module" in package.json
import {a} from "./demo.js"
import txt from "./demo.js"

var gen=superheroes.random()
console.log(`My name is: ${gen}`);
console.log(a);
console.log(txt);