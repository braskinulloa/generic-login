import { Observable, of } from "rxjs";
import { UserI } from "../interfaces";

export class User implements UserI {
    userName: string;
    email: string;
    firstName: string;
    lastName: string;

    constructor(    
        userName: string,
        email: string,
        firstName: string,
        lastName: string
        ) {
        this.userName = userName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get getUserName() {
        return this.userName;
    }
    get getEmail() {
        return this.email;
    }
    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }
    set setUserName(userName: string) {
        this.userName = userName;
    }
    set setEmail(email: string) {
        this.email = email;
    }
    set setFirstName(firstName: string) {
        this.firstName = firstName;
    }
    set setLastName(lastName: string) {
        this.lastName = lastName;
    }
    getFullName() {
        `${this.firstName} ${this.lastName}`
    }
    asObservable(): Observable<User> {
        return of(this);
    }
}