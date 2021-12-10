import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "Who am I?💁‍♂️",
    subTitle: "DETAIL ORIENTED SOFTARE DEVELOPER READY TO CONSULT AND PROVIDE YOU WITH A SOLUTION",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
      "⚡ Creating application backend in Node, Express & .NET",
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      "⚡ Integration of third party services such as Azure/ Heroku/ AWS",
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
