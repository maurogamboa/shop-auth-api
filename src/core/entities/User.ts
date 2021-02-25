import { UserRole } from "./Roles";

export interface User {
  username: string,
  fullname: string,
  roles: UserRole[];
  active: boolean;
}