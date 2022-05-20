import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(usernameOrEmail: string, password: string): Observable<any>{
        return of({ authUser: 'El Pepe', token: 'token'});
    }
}