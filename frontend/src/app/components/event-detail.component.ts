
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
@Component({
  standalone:true, selector:'app-event-detail', imports:[CommonModule],
  template:`
  <div class="detail" *ngIf="event">
    <div class="hero"><img [src]="event.imageUrl || 'https://via.placeholder.com/1200x600?text=Event'"></div>
    <h2>{{ event.title }}</h2>
    <div class="meta">{{ event.startDateTime | date:'fullDate' }} • {{ event.startDateTime | date:'shortTime' }} <span *ngIf="event.location">| {{ event.location }}</span></div>
    <p class="preview">{{ event.description }}</p>
    <div style="display:flex;gap:12px">
      <button class="btn" (click)="addIcs()">+ Ajouter</button>
      <button class="btn" (click)="openGoogle()">Google Calendar</button>
    </div>
  </div>`
})
export class EventDetailComponent{
  event?: Event;
  constructor(private route: ActivatedRoute, private api: EventService){
    const id=String(this.route.snapshot.paramMap.get('id')); this.api.get(id).subscribe(e=>this.event=e);
  }
  addIcs(){ if(!this.event) return; this.api.downloadIcs(this.event.id).subscribe(blob=>{ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=(this.event?.title||'event')+'.ics'; a.click(); URL.revokeObjectURL(a.href); }); }
  openGoogle(){ if(!this.event) return; this.api.googleUrl(this.event.id).subscribe(url=>window.open(url,'_blank')); }
}
