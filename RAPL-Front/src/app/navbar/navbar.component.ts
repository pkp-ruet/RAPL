import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() loginClick = new EventEmitter();
  @Input() loggedIn: boolean;
  @Input() registerd: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLoginClick(){
    this.loginClick.emit();
  }
  logOut() {
    this.authService.logOut();
    this.loggedIn = false;
  }

}
