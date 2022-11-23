import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, delay, Observable, tap, throwError} from "rxjs";
import {ErrorService} from "./error.service";
import { IGuest } from "../models/guest";
import { guests } from "../data/invites"

@Injectable({
  providedIn: "root"
})
export  class InviteService{
constructor(
  private http: HttpClient,
  private errorService:ErrorService

) {

}

public guests: IGuest[] = [...guests];

getAll():Observable<IGuest[]>{
  this.guests = guests
  return this.http.get<IGuest[]>('http://tapi.yabi.cloud/api/read/',{
  }).pipe(
    delay(2000),
    catchError(this.errorHandler.bind(this))
  )
}

invite(guest: IGuest): Observable<IGuest> {
  console.log('fetch url');
  this.guests.push(guest);
 return this.http.post<IGuest>('http://tapi.yabi.cloud/api/create/', guest)
   .pipe(
     tap(guest => this.guests.push(guest)),
     catchError(this.errorHandler.bind(this))
   )
}

delete(id:any):Observable<IGuest[]>{
  return this.http.get<IGuest[]>(`http://tapi.yabi.cloud/api/delete/?id=${id}`,{
  }).pipe(
    tap(res => this.guests = res),
    catchError(this.errorHandler.bind(this))
  )
}

private errorHandler(error:HttpErrorResponse){
  this.errorService.handle(error.message)
  return throwError(() => error.message);
}
}
