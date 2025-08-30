
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
@Component({
  standalone: true, selector:'app-discover', imports:[CommonModule,RouterModule],
  template:`
<div class="chips">
  <div class="chip active">Concert</div><div class="chip">Exposition</div><div class="chip">Sport</div><div class="chip">Keynote</div><div class="chip">Sortie</div>
</div>
<div class="grid">
  <a class="card" *ngFor="let e of events" [routerLink]="['/event', e.id]">
    <div class="image-container">
      <img [src]="e.imageUrl || 'https://via.placeholder.com/600x400?text=Event'"/>
      <div class="overlay">
        <h3 class="title">{{ e.title }}</h3>
        <div class="bottom-overlay">
          <div class="date">{{ e.startDateTime | date:'d MMMM y' | uppercase }}</div>
          <button class="btn">+ Ajouter</button>
        </div>
      </div>
    </div>
  </a>
  <div class="loading" *ngIf="events.length === 0">
    <div class="spinner-border" role="status">
    </div>
  </div>
</div>`
})
export class DiscoverPage {
  events: Event[]=[];
  loading = true;
  constructor(private api: EventService){}

  ngOnInit(): void {
    this.api.search('show me 12 events in Paris this week').subscribe((events) => {
      this.events = events.slice(0, 12);
      this.loading = false;
    });
  }
}
