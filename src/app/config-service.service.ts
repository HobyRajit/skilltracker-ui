import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  private appConfig:any
  constructor(private httpClient:HttpClient) { 
    
  }

  loadAppConfig(){
    this.httpClient.get('../assets/config.json').toPromise().
    then(config=>{
      this.appConfig = config;
    }
    );
  }
    
    get searchSkillApiUrl(): any{
      return this.appConfig.skilltrackerApiUrl;
    }

  }
 