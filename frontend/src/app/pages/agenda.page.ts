
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true, selector:'app-agenda', imports:[CommonModule],
  template:`
  <div class="hero"><img src="https://picsum.photos/seed/hero/1200/400" alt="hero"></div>
  <div class="calendar" style="margin-top:12px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div><strong>Avril 2025</strong></div><div>◀︎ ▶︎</div>
    </div>
    <div class="row"><div class="day">2</div><div class="day">5</div><div class="day">7</div><div class="day">10</div>
    <div class="day">11</div><div class="day">13</div><div class="day">19</div><div class="day">23</div><div class="day">26</div><div class="day">29</div></div>
  </div>`
})
export class AgendaPage {}
