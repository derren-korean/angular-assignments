import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  logs = [];
  toggleSecret() {
    this.showSecret = !this.showSecret;
    this.addLogs();
  }
  addLogs() {
    this.logs.push(new Date().toTimeString());
  }
}
