
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
@Injectable({ providedIn: 'root' })
export class EventService {
  private base='/api';

  constructor(private http: HttpClient){}

  search(query:string):Observable<Event[]> { 
    return this.http.get<Event[]>(`${this.base}/events?q=${query}`);
  }
  
  get(id:string):Observable<Event> {
    return this.http.get<Event>(`${this.base}/events/${id}`);
  }
  
  downloadIcs(id:string) {
    return this.http.get(`${this.base}/calendar/ics/${id}`, { responseType:'blob' });
  }

  googleUrl(id:string) {
    return this.http.get(`${this.base}/calendar/google-url/${id}`, { responseType:'text' });
  }
}
