#! /usr/bin/env node 
 import inquirer from "inquirer";
  import chalk from "chalk";

 // update 
 //delate 
 
let todos :any[] =[];
let condition = true;
console.log(chalk.cyan("\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"))
console.log(chalk.red("                                KT TODO LIST APP"))
console.log(chalk.cyan("             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n"))

let todoList = await inquirer.prompt([
    {
            name: "title",
            // message: "What you want to add in todo list?",
            message: chalk.green("Write title of making list?"),
            type: "input"
    },
    {
            name: "wantTo",
            type: "list",
            message:chalk.green( "Do you want to?"),
            choices: ["MakeList","Exit"]
        }])
// want to makeList 
if(todoList.wantTo === "MakeList"){
      while(condition){
let makeList =await inquirer.prompt([
    {
        name: "moreList",
        type: "list",
        message: chalk.green("Do you want to?"),
        choices: ["Add","Update","Delete","View","Exit"],
        default : "true"
    }
])
//add
    if(makeList.moreList === "Add"){
       let addItem = await inquirer.prompt([
        {
            name:"list",
            type: "input",
            message:chalk.green( "What you want to add?"),   
        }
       ])
       todos.push(addItem.list);
       console.log(chalk.blue(todos));
       console.log(chalk.red("*----------------*"))
       condition = makeList.moreList
    }
//update
else if (makeList.moreList ==="Update"){
   let updateMore = await inquirer.prompt([

    {
        name: "updateList",
        type:"number",
        message: chalk.green("Which item you want to update(index)? "),
        },
        {
            name: "newName",
            type:"input",
            message:chalk.green( "Enter new item: ",)
            }
    ])     
todos[updateMore.updateList]=updateMore.newName;
console.log(chalk.blue(todos));
console.log(chalk.red("*----------------*"))
condition = makeList.moreList

}
//delete
else if (makeList.moreList ==="Delete"){
    let deleteItems = await inquirer.prompt([
        {
            name:  "delete1",
            type: "number",
            message: chalk.green("Which element do you want to delete(index)?")
        }
    ])

    todos.splice(deleteItems.delete1,1),
    console.log(chalk.blue(todos))
    console.log(chalk.red("*----------------*"))
    condition = makeList.moreList

}
//view
else if(makeList.moreList === "View"){
    todos.forEach(view1 => (console.log(chalk.blue(view1))))
    console.log(chalk.red("*----------------*"))


}
//exit
else if (makeList.moreList === "Exit"){
    console.log(chalk.red("\n   ***Thanks for using KT Todo List***"))
    console.log(chalk.red("**-------------------------------------------------------------------**"))
condition = false;
}
}}
//  Exit the app
else if(todoList.wantTo === "Exit"){
    console.log(chalk.red("\n   ***Thanks for using KT Todo List***"))
    console.log(chalk.red("**-------------------------------------------------------------------**"))

}



















