import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import {catchError, delay, Observable, tap,map, throwError} from "rxjs";
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
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response' as 'response'
};
public guests: IGuest[] = [];

getAll():Observable<IGuest[]>{
  return this.http.get<IGuest[]>('http://tapi.yabi.cloud/api/read/').pipe(
  tap(guests => {
    this.guests =  (guests as any).body
  }),
  catchError(this.errorHandler.bind(this))
)
  
}

invite(guest: IGuest): Observable<IGuest> {
  const body=JSON.stringify(guest);
 return this.http.post<IGuest>('http://tapi.yabi.cloud/api/create/', body).pipe(
  tap(response => {
    if(!this.guests)this.guests = [];
    this.guests.push(guest)
  }),
  catchError(this.errorHandler.bind(this))
 )
}

delete(id:any):Observable<IGuest[]>{
  console.log('delete', id)
  return this.http.post<IGuest[]>('http://tapi.yabi.cloud/api/delete/',JSON.stringify({id:id}),{
  }).pipe(
    tap(res =>  {
      this.guests.filter(x => x.id !== id);
    }),
    catchError(this.errorHandler.bind(this))
  )
}

private errorHandler(error:HttpErrorResponse){
  this.errorService.handle(error.message)
  return throwError(() => error.message);
}
}
