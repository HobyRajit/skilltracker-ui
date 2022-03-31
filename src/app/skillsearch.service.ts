import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Model} from './model';
import {SkillProfile} from "./skillprofile";
import {Observable} from 'rxjs';
import {ConfigServiceService} from "./config-service.service";

@Injectable({
  providedIn: 'root'
})
export class SkillsearchService {

  constructor(private httpClient: HttpClient,private configServiceService:ConfigServiceService) {
    
   }

  searchSkills(model:Model):Observable<any>{
    console.log("Inside the service method")
    console.log("The api url :"+this.configServiceService.searchSkillApiUrl);
    return this.httpClient.post(this.configServiceService.searchSkillApiUrl,model);

  }
}
