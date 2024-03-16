import { User, ROLES } from "./02-enum";

const currentUser: User = {
  username: 'Draco',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}
const rta = checkAdminRole();
console.log('checkAdminRole', rta); // false

// ejemplo 1
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2); // false

// ejemplo 2
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]); // se mandan como array[]
console.log('checkRoleV2', rta3); //false

// ejemplo 3
export const checkRoleV3 = (...etc: string[]) => { // rest params son customizables
  if (etc.includes(currentUser.role)) {
    return true;
  }
  return false;
}
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);
// true :)
