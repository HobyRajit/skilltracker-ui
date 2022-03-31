import { Component, OnInit } from '@angular/core';
import {SkillProfile} from '../skillprofile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skillProfileList:SkillProfile[] ;

  constructor() { }

  ngOnInit(): void {
  }


  passingSkills(skills:SkillProfile[]){
    this.skillProfileList = skills;
  }

}
