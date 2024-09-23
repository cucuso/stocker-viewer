import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private heroesUrl = 'http://localhost:8080';  

  constructor(
    private http: HttpClient) { }

/** GET heroes from the server */
getEpsAnnouncements(): Observable<any> {
  return this.http.get<any>(this.heroesUrl+'/expected-earnings-announcements')
}

/** GET heroes from the server */
getStockAnalysis(): Observable<any> {
  return this.http.get<any>(this.heroesUrl+'/analysis')
}

getTopGainers(date:any): Observable<any> {
  return this.http.get<any>(this.heroesUrl+'/top-gainers?date='+ date)
}

}