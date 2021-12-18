import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Engineer",
        company: "Northrop Grumman",
        color: "#00219B",
        companylogo: "../../../assets/images/ng_logo.jpg",
        date: "September 2020 - Current",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Work with an Agile team developing software for the Engineering community at Northrop Grumman",
      },
      {
        role: "Junior Software Engineer",
        company: "Informa Software",
        color: "#325194",
        companylogo: "../../../assets/images/informa_software.png",
        date: "Feb 2020 – Aug 2020",
        desc: "Worked in a DevOps team developing and maintaining software tools and utilities for Informa's business clients",
      },
      {
        role: "Systems Integration Intern",
        company: "Leidos",
        color: "#471266",
        companylogo: "../../../assets/images/leidos.jpg",
        date: "May 2019 – Dec 2019",
        desc: "Was a member of the System Engineering and Integration Contract team (SEIC) developing automated tests for mission planning software",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
