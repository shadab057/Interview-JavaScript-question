// key in object

const checkKeyInObject = (key, object) =>{
    if (!object) {
        return false;
    }
    // return key.toString() in object;
    return object.hasOwnProperty(key);
};

const obj = {name: 'Mohd', age:28};  // API 

console.log(checkKeyInObject('tostring', obj));


