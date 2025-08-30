
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
@Component({
  standalone:true, selector:'app-search', imports:[CommonModule,FormsModule,RouterModule],
  template:`
  <div class="searchbar">
    <input [(ngModel)]="q" placeholder="WWDC, Barça, COP29..." (keyup.enter)="onSearch()"/>
    <button class="btn" (click)="onSearch()">Rechercher</button>
  </div>
  <div class="chips"><div class="chip active">Musique</div><div class="chip">Conférences</div><div class="chip">Sport</div><div class="chip">Bien-être</div></div>
  <div class="grid" *ngIf="events?.length">
    <a class="card" *ngFor="let e of events" [routerLink]="['/event', e.id]">
      <img [src]="e.imageUrl || 'https://via.placeholder.com/600x400?text=Event'"/>
      <div class="date">{{ e.startDateTime | date:'d MMM y' | uppercase }}</div>
      <h3>{{ e.title }}</h3>
      <p class="preview">{{ e.shortDescription }}</p>
      <button class="btn">+ Ajouter</button>
    </a>
  </div>`
})
export class SearchPage{
  q='show me events this Saturday in Paris'; events: Event[]=[];
  constructor(private api: EventService){}
  onSearch(){ this.api.search(this.q).subscribe(r=>this.events=r.slice(0,30)); }
}
