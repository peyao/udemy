import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  logItems = 0;
  log = [];

  onDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.logItems++
    this.log.push(new Date().toLocaleTimeString());
  }
}
