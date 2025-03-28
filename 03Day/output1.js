// Map method

const users = [
    {name:"Shadab", age:24},
    {name:"Rahul", age:25},
    {name:"Sandeep", age:28}
];

console.log (users.map((user)=>{
    return {
        ...user,age:user.age + 5
    }
}));


console.log(users.map((user)=> ({ ...user,avge:user.age + 5})))


// In JavaScript, the map method is a simple way to create a new array by doing something to each item in an existing array.