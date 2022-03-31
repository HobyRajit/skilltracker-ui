import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {SKILLSPROFILE} from '../moke-skillprofile';
import {SkillsearchService} from '../skillsearch.service'

import {Model} from '../model';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-skilltrackersearch',
  templateUrl: './skilltrackersearch.component.html',
  styleUrls: ['./skilltrackersearch.component.css']
})
export class SkilltrackersearchComponent implements OnInit {

  model:Model ;

  @Output() 
  skills = new EventEmitter();

  

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private skillsearchService:SkillsearchService) {
    this.model=new Model('','','');
   }

  ngOnInit(): void {
    
  }

  onSubmit(form:any){
    console.log("AssociateId is:"+this.model.associateId);
    this.skillsearchService.searchSkills(this.model).subscribe(
    (searchSkills)=>{
      console.log(searchSkills);
      
    this.skills.emit(searchSkills);

    }
    );
  }

}
