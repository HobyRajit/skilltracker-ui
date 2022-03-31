import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {Amplify,Auth} from 'aws-amplify';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { SkilltrackersearchComponent } from './skilltrackersearch/skilltrackersearch.component';
import { SkilltrackerlistComponent } from './skilltrackerlist/skilltrackerlist.component';
import {ConfigServiceService} from './config-service.service';
import {APP_INITIALIZER} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';;

Amplify.configure({
  Auth:{
    mandatorySignIn:true,
    region: 'ap-south-1',//ap-south-1
    userPoolId: 'ap-south-1_lfrUHr3yf',//ap-south-1_4Rwj7xZdP
    userPoolWebClientId: '6f4inkbf6hi0joihs7pultrbib',//7vd3qm02hnev1p5a9mqg3n8rkn
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }

});

const oauth={
  domain :'checkfordemodomainname.auth.ap-south-1.amazoncognito.com',
  scope: ['aws.cognito.signin.user.admin','email','openid','phone','profile'],
  redirectSignIn:'',
  redirectSignOut:'',
  responseType:'code',
  options:{
    AdvancedSecurityDataCollectionFlag:false
  }
}

Auth.configure({
  oauth:oauth
});
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SkilltrackersearchComponent,
    SkilltrackerlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { 
      provide : APP_INITIALIZER, 
      multi : true, 
       deps : [ConfigServiceService], 
       useFactory : (appConfigService : ConfigServiceService) =>  () => appConfigService.loadAppConfig()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
