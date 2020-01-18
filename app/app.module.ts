import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgModel, FormsModule, NgForm} from '@angular/forms';//for ngModule 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    EventsComponent,
    PortfolioComponent,
    FeedbackComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule, //for ngModule 
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"",component :HomeComponent},
      {path:"home",component :HomeComponent},
      {path:"about-us",component :AboutUsComponent},
      {path:"contact-us",component :ContactUsComponent},
      {path:"events",component :EventsComponent},
      {path:"feedback",component :FeedbackComponent},
      {path:"portfolio",component :PortfolioComponent},
      {path:"login",component :LoginComponent},
      {path:"register",component :RegisterComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
