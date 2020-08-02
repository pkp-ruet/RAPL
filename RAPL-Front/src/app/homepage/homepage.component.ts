import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  showLoginPage = false;
  loggedIn = false;
  registerd = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.currentMember) {
      this.loggedIn = true;
    }
  }
  openLoginPage(){
    this.showLoginPage = true;
  }
  closeLoginPage() {
    this.loggedIn = true;
  }

}
