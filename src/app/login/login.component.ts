import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  async loginWithCognito(){
    try{
      var user = await Auth.signIn(this.email.toString(),this.password.toString());
      var tokens = user.signInUserSession;
  
        if (tokens != null) {


         // this.authService.setToken(JSON.stringify(tokens));
  
          console.log('User authenticated');
  
  
         // this.router.navigate(['home']);
  
          alert('You are logged in successfully !');
        }
    }
    catch(error){
      console.log(error);
      alert("User authentication failed");
    }
  }

}
