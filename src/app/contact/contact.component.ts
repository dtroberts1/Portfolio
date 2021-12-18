import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Do you have a project that you would like to discuss? Let's talk.",
    number: "407.694.5418",
    email_address: "dylan@robertssoftwaresolutions.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
