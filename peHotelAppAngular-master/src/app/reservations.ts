import {User} from "./users";

export class UserModel implements User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  login: string;
  password: string;
  roles: string;

  constructor(id: number, firstName: string, lastName: string, email: string, phone: number, login: string, password: string, roles: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.login = login;
    this.password = password;
    this.roles = roles;
  }
}

export interface Reservation {

  id: number;
  /*reservationNumber: number;*/
  startDate: Date;
  endDate: Date;
  price: number;
  reservationStatus: string;
  //user: UserModel;

}
