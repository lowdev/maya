
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DiscoverPage } from './app/pages/discover.page';
import { TrendsPage } from './app/pages/trends.page';
import { SearchPage } from './app/pages/search.page';
import { AgendaPage } from './app/pages/agenda.page';
import { EventDetailComponent } from './app/components/event-detail.component';
const routes: Routes = [
  { path: '', component: DiscoverPage },
  { path: 'trends', component: TrendsPage },
  { path: 'search', component: SearchPage },
  { path: 'agenda', component: AgendaPage },
  { path: 'event/:id', component: EventDetailComponent }
];
bootstrapApplication(AppComponent, { providers: [provideRouter(routes), provideHttpClient()] });
