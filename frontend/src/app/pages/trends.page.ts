
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
@Component({
  standalone:true, selector:'app-trends', imports:[CommonModule,RouterModule],
  template:`
  <div class="chips">
    <div class="chip active">Musique</div><div class="chip">Cinéma & séries</div><div class="chip">Sport</div><div class="chip">Tech</div>
  </div>
  <div class="grid">
    <a class="card" *ngFor="let e of events" [routerLink]="['/event', e.id]">
      <img [src]="e.imageUrl || 'https://via.placeholder.com/600x400?text=Event'"/>
      <div class="date">{{ e.startDateTime | date:'d MMMM y' | uppercase }}</div>
      <h3>{{ e.title }}</h3>
      <button class="btn">+ Ajouter</button>
    </a>
  </div>`
})
export class TrendsPage{
  events: Event[]=[]; constructor(private api: EventService){ this.api.search('popular events in France this month').subscribe(r=>this.events=r.slice(0,15)); }
}
