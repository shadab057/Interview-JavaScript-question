const user = {
    name: "Mohd Shadab",
    age: 24,
    Profession: "Software Developer",
    Company: "Portronics"
};

// const jsonString = JSON.stringify(user)   //the stringify method typically refers to JSON.stringify(), which is used to convert a JavaScript object or value into a JSON (JavaScript Object Notation) string.
const jsonString = JSON.parse('{"name":"Mohd Shadab","age":24,"Profession":"Software Developer","Company":"Portronics"}')  //  the parse method typically refers to JSON.parse(), which is the counterpart to JSON.stringify(). It takes a JSON string and converts it back into a JavaScript object, array, or other value.
console.log(jsonString)