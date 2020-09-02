import { Component, OnInit } from '@angular/core';
import { Member } from './_models/member';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RAPL-Front';
  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const member: Member = JSON.parse(localStorage.getItem('member'));
    if (token) {
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (member) {
      this.authService.currentMember = member.username;
    }
  }
  getUrl()
  {
    return 'url(\'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?cs=srgb&dl=pexels-felix-mittermeier-956981.jpg&fm=jpg\')';
  }
}
