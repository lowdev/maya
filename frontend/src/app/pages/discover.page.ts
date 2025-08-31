
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
@Component({
  standalone: true, selector:'app-discover', imports:[CommonModule,RouterModule],
  styles:[`
    .masonry-container {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
        
      -webkit-column-gap: 15px;
      -moz-column-gap: 15px;
      column-gap: 15px;
    }

    .masonry-item {
      display: inline-block;
      width: 100%;
    }

    .masonry-item img {
      display:block;
      width: 100%;

      border-radius:30px;
      box-shadow:0 6px 18px rgba(0,0,0,.08);
    }

    /* Just for decoration: */
    .masonry-item span {
      font-family: sans-serif;
      display:block;
      padding:10px;
    }

    .masonry-item {
      margin-bottom: 15px;
      border:1px solid #ccc;
      border-radius:30px;
      box-shadow:0 6px 18px rgba(0,0,0,.08);
    }

    .card-little {
      height: 230px;
    }

    .card-average {
      height: 280px;
    }

    .card-big {
      height: 330px;
    }
  `],
  template:`
      <div class="chips">
        <div class="chip active">Concert</div><div class="chip">Exposition</div><div class="chip">Sport</div><div class="chip">Keynote</div><div class="chip">Sortie</div>
      </div>
      <div class="masonry-container">
        <div class="masonry-item" *ngFor="let e of events" [routerLink]="['/event', e.id]">
          <div class="image-container">
              <img [ngClass]="{
                'card-little': e.size === 'little',
                'card-average': e.size === 'average',
                'card-big': e.size === 'big'
               }" [src]="e.imageUrl || 'https://via.placeholder.com/600x400?text=Event'"/>
              <div class="overlay">
                <h3 class="title">{{ e.title }}</h3>
                <div class="bottom-overlay">
                <div class="date">{{ e.startDateTime | date:'MMMM y' | uppercase }}</div>
                  <button class="btn">+ Ajouter</button>
                </div>
              </div>
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
