import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import {Observable,of} from 'rxjs';
import {catchError, delay,map} from 'rxjs/Operators'

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  user_list: any;
 
  constructor() { }
 
  emailExists(email: string): Observable<boolean> {
    return of(email).pipe(
      delay(500),
      map((email) => {
        const emails = this._user_list;
        return emails.includes(email);
      })
    );
  }
  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        catchError(async (err) => null)
      );
    };
}
  users:any = localStorage.getItem('userlist')
  private _user_list = JSON.parse(this.users);
  
  
}
