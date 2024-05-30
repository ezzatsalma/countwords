#! /usr/bin/env Node

import inquirer from "inquirer";
let abc=await inquirer.prompt([{
    name:'sentence',
type:"input",
message:"enter paragraph to count words"


}])
let words=abc.sentence.trim().split(' ')


if(words.length==1){
    console.log('no sentence entered');
    
}
else{
    console.log(words)
    console.log(`NUMBER OF WORDS IN GIVEN PARAGRAPH ARE ${words.length}`);
}









// let abc:string="ali is sleeping and zarra is eating"
// let bcd=abc.trim().split(' ');

// console.log(bcd);
// let cde=bcd.length;
// console.log(`number of words in given paragraph is ${cde}`);