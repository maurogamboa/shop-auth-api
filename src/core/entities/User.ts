import { UserRol } from "./Roles";

export interface User {
  username: string,
  fullname: string,
  roles: UserRol[];
  active: boolean;
}