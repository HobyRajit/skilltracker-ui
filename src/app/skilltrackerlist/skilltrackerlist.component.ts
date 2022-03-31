import { Component, OnInit, Input } from '@angular/core';
import {SkillProfile} from '../skillprofile';

@Component({
  selector: 'app-skilltrackerlist',
  templateUrl: './skilltrackerlist.component.html',
  styleUrls: ['./skilltrackerlist.component.css']
})
export class SkilltrackerlistComponent implements OnInit {

  @Input()
  skillProfileList:SkillProfile[];

  constructor() { }

  ngOnInit(): void {
  }


  
}
