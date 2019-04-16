import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  allData = [{
    name: 'ჯაბა',
    surename: 'ჯავახიშვილი',
    personalNumber: '12345678911'
  }]
  getDatas(e){
    this.allData = e
  }
}
