import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/dtroberts1",
    linkedin: "https://www.linkedin.com/in/dylan-roberts-09207219a/",
    email: "dylan@robertssoftwaresolutions.com",
  };
  constructor() { }

  ngOnInit(): void {
  }

}
