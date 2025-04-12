
//  From Switch Case Statements to clean Object Mapping  

function fetchRole(roleID){
    // switch (roleID) {
    //     case 1:
    //         return "Admin";

    //     case 2:
    //         return "Moderator";

    //     case 3:
    //         return "Special User";

    //     default :
    //         return "User";
    // }
    const createRoleObj = {
        1:'Admin',
        2:'Moderator',
        3:'Special Use'
    }
    return createRoleObj[roleID] || "User";
}

console.log(fetchRole(1));
console.log(fetchRole(2));
console.log(fetchRole(3));
console.log(fetchRole(4));
