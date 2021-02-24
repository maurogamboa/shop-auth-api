import { User } from "../../core/entities/User";

export interface UserData extends User {
  password?: string;
}