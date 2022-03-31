import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email!:string;

  password!:string;

  confirmcode!:string;

  confirm:boolean = false;


  constructor(private router:Router) { }


  ngOnInit(): void {
  
  }


  register(){

    try {

      console.log("Inside register");
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
      });

      console.log({ user });

      alert('User signup completed , please check verify your email.');

      
      this.confirm = true;
      

    } catch (error) {

      console.log('error signing up:', error);

    }

  }

  confirmSignUp(){
    async function confirmSignUp() {
      try {
        await Auth.confirmSignUp(this.email, this.confirmcode );
        
        this.router.navigate(['login']);
      } catch (error) {
          console.log('error confirming sign up', error);
      }
  }
  }

}
