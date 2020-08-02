import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginUser } from '../_models/member';
import { UserService } from '../_services/user.service';
import * as alertify from 'alertifyjs';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginOk = new EventEmitter();
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group(
      {
        username: [''],
        password: ['']
      }
    );
  }
  logIn(){
    console.log(this.loginForm);
    const user = new LoginUser();
    user.username = this.loginForm.controls['username'].value;
    user.password = this.loginForm.controls['password'].value;
    this.authService.login(user).subscribe(next =>{
      this.loginOk.emit();
      alertify.success('Login Successfully');
    }, error => {
      alertify.error(error.error);
    });
  }
  cancel(){

  }
}
