import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
   declarations: [
      AppComponent,
      HomepageComponent,
      NavbarComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ButtonsModule.forRoot(),
      FormsModule,
      BsDropdownModule.forRoot(),
      ReactiveFormsModule,
      AngularFontAwesomeModule,
      BrowserAnimationsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter:() => {
               return localStorage.getItem('token');
             },
             allowedDomains: ['localhost:5000'],
             disallowedRoutes:[]
         }
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
