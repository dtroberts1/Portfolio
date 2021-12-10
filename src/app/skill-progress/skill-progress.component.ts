import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend/Design",
        progressPercentage: "80%"
      },
      {
        Stack: "Backend",
        progressPercentage: "66%"
      },
      {
        Stack: "Algorithmic Design",
        progressPercentage: "55%"
      },
      {
        Stack: "Architecture Design",
        progressPercentage: "60%"
      },
      {
        Stack: "Communication/Consultation",
        progressPercentage: "82%"
      },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
