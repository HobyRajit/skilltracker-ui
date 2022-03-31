import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skill-tracker-ui';

  onLoginClick(){
    console.log("inside onloginClick");
    const URL ="https://checkfordemodomainname.auth.ap-south-1.amazoncognito.com/login?"+
    "client_id=6f4inkbf6hi0joihs7pultrbib&response_type=code&"+
    "scope=aws.cognito.signin.user.admin+email+openid+phone+profile&"+
    "redirect_uri=https://d3pyjxa9il4trq.cloudfront.net/index.html";
    window.location.assign(URL);
  }
}
