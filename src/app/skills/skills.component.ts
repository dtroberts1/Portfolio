import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "Who am I?💁‍♂️",
    subTitle: "DETAIL ORIENTED SOFTARE DEVELOPER READY TO CONSULT AND PROVIDE A SOLUTION",
    skills: [
      "⚡ Developing highly interactive front end / user interfaces (UIs)",
      "⚡ Creating application backend in Node, Express & .NET",
      "⚡ Developing Web Applications in MPA and SPA Stacks",
      "⚡ Enabling Secure Integration via Application Programming Interfaces (APIs)",
      "⚡ Integrating third party deployment services such as Azure/ Heroku/ AWS",
      "⚡ Developing Unit, Integration, and End-to-end Tests",
      "⚡ Being involved in all phases of Software Development Life Cycle (SDLC)",
      "⚡ Working with SQL and NoSQL databases like MySQL, Firebase, Microsoft SQL Server",
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
