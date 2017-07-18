import { Component } from "@angular/core";

@Component({
  selector: 'app-logout',
  template: `
    <div className="col-md-8.col-md-offset-2" (click)="onLogout()">
      <button className="btn btn-danger">Logout</button>
    </div>
  `
})

export class LogoutComponent {
  onLogout() {
    
  }
}
