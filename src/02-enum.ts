export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type User = {
  username: string,
  role: ROLES;
}

const michiUser: User = {
  username: 'michibb',
  // role: 'admin'
  role: ROLES.SELLER
}

