import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, delay, map, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {UserModel} from "../models/user.model";
import {UserFormValueModel} from "../models/userFormValue.model";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.apiUrl}/user`);
  }

  getUserById(id: number) {
    return this.http.get<UserModel>(`${environment.apiUrl}/user/` + id);
  }

  registerUser(userValue: UserFormValueModel): Observable<boolean> {
    let user : UserModel = {
      firstName: userValue.personalInfo.firstName,
      lastName: userValue.personalInfo.lastName,
      username: userValue.loginInfo.username,
      password: userValue.loginInfo.password,      contactPreference: userValue.contactPreference,
      phone:  (userValue.phone === undefined) ? '' : userValue.phone,
      email: (userValue.email === undefined) ? '' : userValue.email.email ,
      roles: ["ROLE_USER"]
    }
    return this.http.post(`${environment.apiUrl}/register`, user).pipe(
      map(() => true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }

}
