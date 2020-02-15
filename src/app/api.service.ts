import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from './entities';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }

  loadData() : Observable<any>{
    return this.http.get(this.baseUrl)
  }

  createPending(pending: Entry) : Observable<any> {
    return this.http.post(this.baseUrl, pending);
  }

  deletePending(pendingId: String) : Observable<any>{
  return this.http.delete(this.baseUrl + "/" + pendingId, {
    responseType: "text"
  })
  }

  createComment(msg: Entry) : Observable<any>{
    return this.http.put(this.baseUrl + "/" + msg._id, msg, {
      responseType: "text"
    });
  }

}
