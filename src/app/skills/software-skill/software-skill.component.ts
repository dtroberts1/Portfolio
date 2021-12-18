import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "less",
        fontAwesomeClassname: "fab fa-less"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "Angular",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "jenkins",
        fontAwesomeClassname: "fab fa-jenkins"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "aws",
        fontAwesomeClassname: "fab fa-aws"
      },
      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }

    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
